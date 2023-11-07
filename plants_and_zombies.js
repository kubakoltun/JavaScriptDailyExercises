const plantsAndZombies=(lawn,zombies)=>{
  let shooters = [];
  let h = lawn.length;
  let w = lawn[0].length;

	for (let y = 0; y < h; y++) {
    for(let x = 0; x < w; x++) {
      if (lawn[y][x] != ' ') {
        shooters.push({y,x,t:~~lawn[y][x]});
      }
    }
  }                                 

  shooters.sort((a, b) => b.t-a.t || b.x-a.x || a.y-b.y);     

  zombies = zombies.map(e => ({y:e[1], x:e[0]+w, h:e[2]}));

  let fire = (y, x, dy, dx, z) => {                                
    while (!z && (y+=dy) < h && (x+=dx) < w && y >= 0) {
      z=zombies.find(e=>e.y==y&&e.x==x);          
    }
    if (z && !(--z.h)) zombies=zombies.filter(e=>e!=z);
  }

  for (let moves=0;zombies.length;moves++) {                 
    for (let z of zombies) {
      if (--z.x<0) return moves;                             
			shooters = shooters.filter(e => e.y != z.y || e.x != z.x);   
    }

		for (let {y, x, t} of shooters) {
      for (let i = 0; i < (t||1); i++) fire(y,x,0,1);         
      if (!t) fire(y,x,1,1), fire(y,x,-1,1);              
    }
	}

  return null;                                        
}
