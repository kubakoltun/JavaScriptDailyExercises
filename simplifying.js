const ltr = /[a-zA-Z]/g;

function simplify(equalities,formula) {
  equalities = equalities.map(eq => {
    return eq.replace(/ /g,"").split("=");
  });

  while (formula.split("").filter(l => equalities.find(a=>a[1]==l)).length) {
    formula = formula.replace(ltr, l => "("+(equalities.find(a=>a[1]==l)||[l])[0]+")");
  }
  let x = formula.match(ltr)[0];

  return eval(formula.replace(ltr, "(1)").replace(/(\d)\(/g, "$1*("))+x;
}
