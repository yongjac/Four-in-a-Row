export function isValidWalk(walk: string[]) {
  var len = walk.length;

  // must be 10 minutes
  if (len != 10) {
      return false;
  }

  var upDown = 0, // verticle position
  leftRight = 0, // horizontal position
  i: number;

  // simulate walking
  for (i = 0; i < len; i++) {
    if (walk[i] === 'n') {
        upDown++;
    }
    else if (walk[i] === 's') {
        upDown--;
    }
    else if (walk[i] === 'w') {
        leftRight--;
    }
    else {
        leftRight++;
    }
  }

  // returns true at starting position
  if (upDown === 0 && leftRight === 0) {
      return true;
  }
  else {
      return false;
  }
}

