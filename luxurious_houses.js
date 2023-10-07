function luxurious_houses(houses) {
  let lux = 0;
  
  return houses.reverse().map(floors => {
    if (floors > lux) {
      lux = floors;
      return 0;
    } else { 
      return (lux - floors + 1);
    }
  }).reverse();
}
