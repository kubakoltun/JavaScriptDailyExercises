function to_camel_case(str) {
  var splitIn = "";
  splitIn = str.split(/[-:_]/);
  for (var i = 0; i < splitIn.length; i++) {
    if (i != 0) {
      splitIn[i] = splitIn[i].charAt(0).toUpperCase() + splitIn[i].substring(1);
    }
  }
  return splitIn.join('');
  
}
