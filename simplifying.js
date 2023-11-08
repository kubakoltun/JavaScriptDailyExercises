
function simplify(equalities, formula) {
  const variableDict = {}; 

  function parseTerm(term) {
    const parts = term.trim().split(" ");
    const coefficient = parseInt(parts[0]) || 1;
    const variable = parts[1];
    return { coefficient, variable };
  }

  for (const equality of equalities) {
    const [left, right] = equality.split('=').map(side => side.trim());
    const leftTerm = parseTerm(left);
    const rightTerm = parseTerm(right);
    variableDict[rightTerm.variable] = {
      coefficient: leftTerm.coefficient - rightTerm.coefficient,
    };
  }

  for (const variable in variableDict) {
    const regex = new RegExp(variable, 'g');
    formula = formula.replace(regex, `(${variableDict[variable].coefficient})`);
  }

  try {
    let result = eval(formula);
    
    if (result === 1) {
      return '1';
    } else {
      return result.toString();
    }
  } catch (error) {
    return "Invalid formula"; 
  }
}
