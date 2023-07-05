function score (dice) {
    let count = 0;
    let points = 0;
    let added = false;
    let singleOnes = false;
    let singleFives = false;
    let tripletOnes = false;
    let tripletFives = false;
    
  	for (let i = 0; i < dice.length; i++) {
    	  count = 0;
         for (let j = i; j < dice.length; j++) {
          if (dice[i] == dice[j]) {
            count++;
          }
        }
        if (dice[i] == 1 && count >= 3 && added == false) {
          added = true;
          tripletOnes = true;
          points += 1000;
        }
        else if (dice[i] == 6 && count >= 3 && added == false) {
          added = true;
          points += 600;
        }
        else if (dice[i] == 5 && count >= 3 && added == false) {
          added = true;
          tripletFives = true;
          points += 500;
        }
        else if (dice[i] == 4 && count >= 3 && added == false) {
          added = true;
          points += 400;
        }
        else if (dice[i] == 3 && count >= 3 && added == false) {
          added = true;
          points += 300;
        }
        else if (dice[i] == 2 && count >= 3 && added == false) {
          added = true;
          points += 200;
        }
        else if (dice[i] == 1 && singleOnes == false) {
          if (tripletOnes == true) {
            if (count > 2) {
              points += (count-2)*100;
            }
          }
          else if (count > 3) {
            points += (count-3)*100;
          } else {
            points += count*100;
          }
          singleOnes = true;
        }
        else if (dice[i] == 5 && singleFives == false) {
          if (tripletFives == true) {
            if (count > 2) {
              points += (count-2)*50;
            }
          }
          else if (count > 3) {
            points += (count-3)*50;
          } else {
            points += count*50;
          }
          singleFives = true;
        }
    }
  
    return points;
  }
