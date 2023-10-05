function justify(str, len) {
  let words = str.split(' ');
  let lines = [];
  let lastLine = words.reduce(function(line, word) {
    if (line) {
      if (line.length + word.length + 1 <= len)
        return line + ' ' + word;
      lines.push(line);
    }
    return word;
  });
  
  lines = lines.map(function(line) {
    if (line.indexOf(' ') >= 0)
      for (let lineLen = line.length; lineLen < len; )
        line = line.replace(/ +/g, function(spaces) {
          return spaces + (lineLen++ < len ? ' ' : '');
        });
    return line;
  });
  lastLine && lines.push(lastLine);
  
  return lines.join('\n');
}
