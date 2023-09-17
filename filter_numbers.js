var FilterNumbers = function(str) {
  return str.split('').filter(c => isNaN(parseInt(c))).join('');
}
