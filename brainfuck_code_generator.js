function generateBFProgramAdvanced(s) {
  let uniq = function (a) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
      if (result.indexOf(a[i]) === -1) result.push(a[i]);
    }
    return result;
  }
  let program = "++++++++++";
  let cells = [0].concat(uniq(s.split("").map(e => Math.round(e.charCodeAt() / 10) * 10)));
  program += "[";

  for (let i = 1; i < cells.length; i++) {
    program += ">" + "+".repeat(cells[i] / 10);
  }
  
  program += "<".repeat(cells.length - 1) + "-]";
  let curri = 0, corri; 

  for (let i = 0; i < s.length; i++) {
    corri = cells.map(v => Math.abs(v - s[i].charCodeAt())).indexOf(Math.min(...cells.map(v => Math.abs(v - s[i].charCodeAt()))));
    program += corri > curri ? ">".repeat(corri - curri) : curri > corri ? "<".repeat(curri - corri) : "";

    if (s[i].charCodeAt() > cells[corri]) {
      while (s[i].charCodeAt() > cells[corri]) {
        program += "+";
        cells[corri]++;
      }
    } 
    else if (s[i].charCodeAt() < cells[corri]) {
      while (s[i].charCodeAt() < cells[corri]) {
        program += "-";
        cells[corri]--;
      }
    }
    program += ".";
    curri = corri;
  }

  return program;
}
