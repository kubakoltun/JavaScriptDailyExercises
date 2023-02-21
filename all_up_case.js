String.prototype.all_up_case = function () {
  var splitIn = this.split(' ');
  for (var i = 0; i < splitIn.length; i++) {
    splitIn[i] = splitIn[i].charAt(0).toUpperCase() + splitIn[i].substring(1);  
  }
  
  return splitIn.join(' ');
};
