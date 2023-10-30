let dict = {
  'ID#': 'ID number',
  NATION: 'nationality',
  grant_of_asylum: 'grant of asylum'
}

class Inspector {
  constructor() {
    this.docs = {Entrants: [], Foreigners: [], Workers: []}
    this.allowed = []
    this.wanted = ''
  }

  receiveBulletin(list) {
    let mod = (lst,itm,add) => {
      let i = lst.indexOf(itm.trim());
      if (add && i==-1) lst.push(itm.trim());
      if (!add && i>-1) lst.splice(i,1);
    }
    
    list.split`\n`.forEach(b => {
      let t;
      let i;
      
      if (t = b.match(/(Allow|Deny) citizens of (.+)/)) {
        t[2].split(', ').forEach(c => mod(this.allowed, c, t[1]=='Allow'));
      } 
      else if (t = b.match(/Wanted by the State: (.+)/)) {
        this.wanted = t[1].split` `.reverse().join`, `;
      } 
      else if (t = b.match(/(Citizens of .+?|Entrants|Foreigners|Workers) (no longer )?require (.+)/)) {
        let [_, type, notReq, doc] = t;
        if (/Citizens of/.test(type)) type = type.slice(12);
        let types = type.includes`,` ? type.split`, ` : [type];
        types.forEach(type => mod(this.docs[type] || (this.docs[type] = []), doc, !notReq));
      }
    })
  }

  inspect(entrant) {
    let res = [];
    let today = new Date('11/22/1982');
    let id = {};
    let chk = 'NAME NATION DOB SEX ID#'.split` `;
    let reqDocs = [...this.docs.Entrants];
    let myDocs = {};

    for (let docName in entrant) {
      let doc = entrant[docName].split`\n`.map(l=>l.split`: `);
      
      doc.forEach(([field,val]) => {
        if (field == 'NAME' && val == this.wanted) res.push([1, `Detainment: Entrant is a wanted criminal.`]);
        if (field == 'EXP' && new Date(val) < today) res.push([3, `Entry denied: ${docName.toLowerCase().replace(/_/g,' ')} expired.`]);
        if (field == 'PURPOSE' && val == 'WORK') reqDocs.push(...this.docs.Workers);
        if (chk.includes(field)) {
          if (!id[field]) id[field] = val;
          if (id[field] != val) res.push([2, `Detainment: ${dict[field] || field} mismatch.`]);
        }
      })
      
      myDocs[docName] = doc.reduce((o,[k,v]) => ({...o, [k]:v}), {});
    }
    
    let nation = id.NATION;
    if (!this.allowed.includes(nation)) res.push([4, `Entry denied: citizen of banned nation.`]);
    if (this.docs[nation]) reqDocs.push(...this.docs[nation]);
    if (nation != 'Arstotzka') reqDocs.push(...this.docs.Foreigners);
    res.push([9, nation == 'Arstotzka' ? 'Glory to Arstotzka.' : 'Cause no trouble.']);
    
    reqDocs.forEach(doc => {
      if (myDocs[doc.replace(/ /g,'_')]) return;
      
      let v;
      if (v = doc.match(/(.+) vaccination/)) {
        let cert = myDocs.certificate_of_vaccination;
        if (!cert) return res.push([3, `Entry denied: missing required certificate of vaccination.`]);
        else if (!cert.VACCINES.split`, `.includes(v[1])) return res.push([3, `Entry denied: missing required vaccination.`]);
        else return;
      }
      
      if (doc == 'access permit') { 
        if (myDocs.grant_of_asylum) return;
        if (myDocs.diplomatic_authorization) {
          if (myDocs.diplomatic_authorization.ACCESS.includes('Arstotzka')) return;
          else return res.push([3, `Entry denied: invalid diplomatic authorization.`]);
        }
      }      
      res.push([3, `Entry denied: missing required ${doc}.`]);
    })

    return res.sort((a,b)=>a[0]-b[0])[0][1];
  }
}
