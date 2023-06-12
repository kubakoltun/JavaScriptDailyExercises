function cakes_making (recipe, available) {
  let cakes = Infinity;
  
  for (var i in recipe) {
    if (!available[i] || available[i] < recipe[i]) {
      return 0;
    }
    
    const possibleCakes = Math.floor(available[i]/recipe[i]);
    if (possibleCakes < cakes) {
      cakes = possibleCakes;
    }
  }
  
  return cakes;
}
