const RANKS = {2:0, 3:1, 4:2, 5:3, 6:4, 7:5, 8:6, 9:7, 10:8, J:9, Q:10, K:11, A:12};
const TYPE = {1:'straight-flush', 2:'four-of-a-kind', 3:'full house', 4:'flush', 5:'straight', 6:'three-of-a-kind', 7:'two pair', 8:'pair', 9:'nothing'};

function hand(hC, cC) {
  let p = possibleHands(hC.concat(cC).sort((a,b)=>RANKS[a.slice(0,-1)]-RANKS[b.slice(0,-1)]));
  let max = p.slice(1).reduce((x,y)=>getMax(x,[y,assignRank(y)]),[p[0],assignRank(p[0])]);
  return {
      type:TYPE[max[1]],
      ranks:[...new Set(getSorted(max[0].map(x=>x.slice(0,-1))))]
  };
}

function possibleHands(cards) {
    let hands = [];

    for (let i=0;i<7;i++) { 
      for (let j=i+1;j<7;j++) { 
        for (let k=j+1;k<7;k++) { 
          for (let l=k+1;l<7;l++) { 
            for (let m=l+1;m<7;m++) { 
              hands.push([i,j,k,l,m].map(x=>cards[x]));
            } 
          } 
        } 
      } 
    }

    return hands;
}

let getSorted = h=>h.slice().sort((x,y)=> {
  let a=h.filter(i=>i==x).length,b=h.filter(i=>i==y).length;
  return a!=b?b-a:RANKS[y]-RANKS[x];
});
let getRank = h=>h.map(x=>x.slice(0,-1));

function getMax(hand1,hand2) {
    if (hand1[1] != hand2[1]) return hand1[1] < hand2[1] ? hand1 : hand2;
    let h1Rank = getRank(hand1[0]);
    let h2Rank = getRank(hand2[0]);
    let a = getSorted(h1Rank);
    let b = getSorted(h2Rank);

    for (let i=0;i<5;i++) {
        let x = RANKS[h1Rank[i]], y = RANKS[h2Rank[i]];
        if (x!=y) return x > y ? hand1 : hand2;
    }
    return hand1;
}

function assignRank(hand) {
    let hRank = getRank(hand);
    let hSuit = hand.map(x=>x[x.length-1]);
    let hInd = hRank.map(x=>RANKS[x]);
    let count = Object.values(hRank.reduce((x,y)=>(x[y]=(x[y]||0)+1,x),{})).sort((x,y)=>y-x);
    let a = hInd.slice(1).every((x,y)=>x-hInd[y]==1);
    let b = [...new Set(hSuit)].length==1;

    return a&&b ? 1 : count[0] == 4 ? 2 : count[0] == 3 && count[1] == 2 ? 3 : b ? 4 : a ? 5 : count[0] == 3 ? 6 : count[0] == 2 && count[1] == 2 ? 7 : count[0] == 2 ? 8 : 9;
}
