function P() {
  document.getElementById("myAudio").play();
}
var car1Selected = false;
var car2Selected = false;
var trackSelected = false;
var canMove = false;
var x = 25;
var y = 0;
var x1 = 35;
var y1 = 70;
var car1_right
var car1_left;
var car1_up;
var car1_down;
var car2_right;
var car2_left;
var car2_up;
var car2_down;
var t;
var g;
var n = 1.2;
var S = 10;
var S1 = 10;
var started = false;
var p1 = 'WASD';
var p2 = '&#9650;&#9664;&#9660;&#9654;';
document.getElementById('p2t').innerHTML = p2;
document.getElementById('p1t').innerHTML = p1;
const pauseMenu = function() {
  if (canMove) {
    document.getElementById('pauseMenu').style.display = "block";
    canMove = false;
  }
}
const restartGame = function() {
  x = 25;
  y = 0;
  x1 = 35;
  y1 = 70;
  canMove = false;
  document.querySelector('#pauseMenu').style.display = 'none';
  document.querySelector('#stoplight').style.display = 'block';
  setTimeout(function() {
    document.getElementById('stoplight').src = "../game_imgs/yellow.png";
  }, 1500);
  setTimeout(function() {
    document.getElementById('stoplight').src = "../game_imgs/green.png";
  }, 2500);
  setTimeout(function() {
    document.querySelector('#stoplight').style.display = 'none';
  }, 3500);
  setTimeout(function() {
    canMove = true;
  }, 3500);
  load();
  addX();
  addX1();
}
const setST1 = function() {
  img2 = document.getElementById("track");
  document.getElementById('setST1').style.backgroundColor = "red";
  document.getElementById('setST2').style.backgroundColor = "grey";
  document.getElementById('setST3').style.backgroundColor = "grey";
  document.getElementById('setST4').style.backgroundColor = "grey";
  trackSelected = true;
  titleGreen();
}

const setST2 = function() {
  img2 = document.getElementById("track1");
  document.getElementById('setST2').style.backgroundColor = "red";
  document.getElementById('setST1').style.backgroundColor = "grey";
  document.getElementById('setST3').style.backgroundColor = "grey";
  document.getElementById('setST4').style.backgroundColor = "grey";
  trackSelected = true;
  titleGreen();
}

const setST3 = function() {
  img2 = document.getElementById("track2");
  document.getElementById('setST3').style.backgroundColor = "red";
  document.getElementById('setST2').style.backgroundColor = "grey";
  document.getElementById('setST1').style.backgroundColor = "grey";
  document.getElementById('setST4').style.backgroundColor = "grey";
  trackSelected = true;
  titleGreen();
}

const setST4 = function() {
  img2 = document.getElementById("track3");
  document.getElementById('setST4').style.backgroundColor = "red";
  document.getElementById('setST2').style.backgroundColor = "grey";
  document.getElementById('setST3').style.backgroundColor = "grey";
  document.getElementById('setST1').style.backgroundColor = "grey";
  trackSelected = true;
  titleGreen();
}
const car1R = function() {
  car1_right = "../game_imgs/car_right.png";
  car1_left = "../game_imgs/car_left.png";
  car1_up = "../game_imgs/car_up.png";
  car1_down = "../game_imgs/car_down.png";
  car1Selected = true;
  document.getElementById("preview").src = "../game_imgs/car_up.png";
  document.getElementById("car1R").style.backgroundColor = "red";
  document.getElementById("car1Y").style.backgroundColor = "grey";
  document.getElementById("car1G").style.backgroundColor = "grey";
  titleGreen();
}
const car1Y = function() {
  car1_right = "../game_imgs/car_right1.png";
  car1_left = "../game_imgs/car_left1.png";
  car1_up = "../game_imgs/car_up1.png";
  car1_down = "../game_imgs/car_down1.png";
  car1Selected = true;
  document.getElementById("preview").src = "../game_imgs/car_up1.png";
  document.getElementById("car1Y").style.backgroundColor = "yellow";
  document.getElementById("car1R").style.backgroundColor = "grey";
  document.getElementById("car1G").style.backgroundColor = "grey";
}
const car1G = function() {
  car1_right = "../game_imgs/car_right2.png";
  car1_left = "../game_imgs/car_left2.png";
  car1_up = "../game_imgs/car_up2.png";
  car1_down = "../game_imgs/car_down2.png";
  car1Selected = true;
  document.getElementById("preview").src = "../game_imgs/car_up2.png";
  document.getElementById("car1G").style.backgroundColor = "green";
  document.getElementById("car1Y").style.backgroundColor = "grey";
  document.getElementById("car1R").style.backgroundColor = "grey";
  titleGreen();
}



const car2R = function() {
  car2_right = "../game_imgs/car_right.png";
  car2_left = "../game_imgs/car_left.png";
  car2_up = "../game_imgs/car_up.png";
  car2_down = "../game_imgs/car_down.png";
  car2Selected = true;
  document.getElementById("preview1").src = "../game_imgs/car_up.png";
  document.getElementById("car2R").style.backgroundColor = "red";
  document.getElementById("car2Y").style.backgroundColor = "grey";
  document.getElementById("car2G").style.backgroundColor = "grey";
  titleGreen();
}
const car2Y = function() {
  car2_right = "../game_imgs/car_right1.png";
  car2_left = "../game_imgs/car_left1.png";
  car2_up = "../game_imgs/car_up1.png";
  car2_down = "../game_imgs/car_down1.png";
  car2Selected = true;
  document.getElementById("preview1").src = "../game_imgs/car_up1.png";
  document.getElementById("car2Y").style.backgroundColor = "yellow";
  document.getElementById("car2G").style.backgroundColor = "grey";
  document.getElementById("car2R").style.backgroundColor = "grey";
  titleGreen();

}
const car2G = function() {
  car2_right = "../game_imgs/car_right2.png";
  car2_left = "../game_imgs/car_left2.png";
  car2_up = "../game_imgs/car_up2.png";
  car2_down = "../game_imgs/car_down2.png";
  car2Selected = true;
  document.getElementById("preview1").src = "../game_imgs/car_up2.png";
  document.getElementById("car2G").style.backgroundColor = "green";
  document.getElementById("car2Y").style.backgroundColor = "grey";
  document.getElementById("car2R").style.backgroundColor = "grey";
  titleGreen();
}


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.imageSmoothingEnabled = false;
var img = document.getElementById("car");
var img1 = document.getElementById("car1");
var img2;
var img3 = document.getElementById("start_screen");

const start = function() {
  ctx.drawImage(img3, 0, 0, 1366, 657);
}
const titleGreen = function() {
  if (car1Selected && car2Selected && trackSelected) {
    document.getElementById('spacebar').style.color = "limegreen";
    clearInterval(t);
    clearInterval(g);
    t = setInterval(function() {
      document.getElementById('spacebar').style.color = "white";
    }, 500);
    g = setInterval(function() {
      document.getElementById('spacebar').style.color = "limegreen";
    }, 1000);
  }
}

const addY = function() {
  document.getElementById('car').src = car1_down;
  load();
  y += S;
}
const addX = function() {
  document.getElementById('car').src = car1_right;
  load();
  x += S;
}
const addnY = function() {
  document.getElementById('car').src = car1_up;
  load();
  y -= S;
}
const addnX = function() {
  document.getElementById('car').src = car1_left;
  load();
  x -= S;
}


const addY1 = function() {
  document.getElementById('car1').src = car2_up;
  load();
  y1 -= S1;
}
const addX1 = function() {
  document.getElementById('car1').src = car2_right;
  load();
  x1 += S1;
}
const addnY1 = function() {
  document.getElementById('car1').src = car2_down;
  load();
  y1 += S1;
}
const addnX1 = function() {
  document.getElementById('car1').src = car2_left;
  load();
  x1 -= S1;
}
const p1Win = function() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = '#c00040';
  ctx.font = '70px Calibri';
  ctx.fillText('PLAYER 1 WINS!!!', ctx.canvas.width / 3.2 + 3, ctx.canvas.height / 2 + 3);
  ctx.fillStyle = 'white';
  ctx.fillText('PLAYER 1 WINS!!!', ctx.canvas.width / 3.2, ctx.canvas.height / 2);
  document.querySelector('#RM').style.display = 'block';
  document.querySelector('#restart').style.display = 'block';
}
const p2Win = function() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = '#c00040';
  ctx.font = '70px Calibri';
  ctx.fillText('PLAYER 2 WINS!!!', ctx.canvas.width / 3.2 + 3, ctx.canvas.height / 2 + 3);
  ctx.fillStyle = 'white';
  ctx.fillText('PLAYER 2 WINS!!!', ctx.canvas.width / 3.2, ctx.canvas.height / 2);
  document.querySelector('#RM').style.display = 'block';
  document.querySelector('#restart').style.display = 'block';
}
const noneWin = function() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = '#c00040';
  ctx.font = '70px Calibri';
  ctx.fillText('GAME OVER!!!', ctx.canvas.width / 3.2 + 3, ctx.canvas.height / 2 + 3);
  ctx.fillStyle = 'white';
  ctx.fillText('GAME OVER!!!', ctx.canvas.width / 3.2, ctx.canvas.height / 2);
  document.querySelector('#RM').style.display = 'block';
  document.querySelector('#restart').style.display = 'block';
  document.querySelector('#pauseMenu').style.display = 'none';
}
const load = function() {
  P();
  ctx.drawImage(img2, 0, 0, 1366, 657);
  ctx.drawImage(img, x, y, 80, 80);
  ctx.drawImage(img1, x1, y1, 80, 80)
  car1Selected = false;
  car2Selected = false;
  if (x < 20 && y > 400) {
    canMove = false;
    p1Win();
  }
  if (x1 < 20 && y1 > 400) {
    canMove = false;
    p2Win();
  }


  if (y == 70 && x < 1130) {
    y = 60;
  }
  if (y == 230 && x > 180) {
    y = 220;
  }
  if (y == 400 && x < 960) {
    y = 390;
  }
  if (y == 170 && x < 1130) {
    y = 180;
  }
  if (y == 330 && x > 180) {
    y = 340;
  }
  if (y == 500 && x < 960) {
    y = 510;
  }
  if (y > 70 && y < 170 && x < 1140) {
    x = 1140;
  }
  if (y > 230 && y < 330 && x > 150) {
    x = 150;
  }
  if (y > 400 && y < 500 && x < 970) {
    x = 970;
  }


  if (y < 0) {
    y = 0;
  }
  if (y > 570) {
    y = 570;
  }
  if (x < 20) {
    x = 20;
  }
  if (x > 1260) {
    x = 1260;
  }




  if (y1 == 70 && x1 < 1130) {
    y1 = 60;
  }
  if (y1 == 230 && x1 > 180) {
    y1 = 220;
  }
  if (y1 == 400 && x1 < 960) {
    y1 = 390;
  }
  if (y1 == 170 && x1 < 1130) {
    y1 = 180;
  }
  if (y1 == 330 && x1 > 180) {
    y1 = 340;
  }
  if (y1 == 500 && x1 < 960) {
    y1 = 510;
  }
  if (y1 > 70 && y1 < 170 && x1 < 1140) {
    x1 = 1140;
  }
  if (y1 > 230 && y1 < 330 && x1 > 150) {
    x1 = 150;
  }
  if (y1 > 400 && y1 < 500 && x1 < 970) {
    x1 = 970;
  }


  if (y1 < 0) {
    y1 = 0;
  }
  if (y1 > 570) {
    y1 = 570;
  }
  if (x1 < 20) {
    x1 = 20;
  }
  if (x1 > 1260) {
    x1 = 1260;
  }


}
window.addEventListener("keydown", keysPressed, false);
window.addEventListener("keyup", keysReleased, false);

var keys = [];

function keysPressed(e) {
  // store an entry for every key pressed
  keys[e.keyCode] = true;

  if (e.key === "Escape") {
    pauseMenu();
  }
  // left
  if (keys[65] && canMove) {

    addnX();
  }

  // right
  if (keys[68] && canMove) {
    addX();


  }

  // down
  if (keys[83] && canMove) {
    addY();

  }

  // up
  if (keys[87] && canMove) {
    addnY();

  }

  // left
  if (keys[37] && canMove) {

    addnX1();
  }

  // right
  if (keys[39] && canMove) {

    addX1();
  }

  // down
  if (keys[38] && canMove) {
    addY1();

  }

  // up
  if (keys[40] && canMove) {
    addnY1();

  }

  // reset
  if (keys[82]) {

    location.reload();
  }


  // start (spacebar)
  if (keys[32] && car1Selected && car2Selected && trackSelected) {
    document.querySelector('#start').style.display = 'none';
    document.querySelector('#RM').style.display = 'none';
    document.querySelector('#car1R').style.display = 'none';
    document.querySelector('#car1Y').style.display = 'none';
    document.querySelector('#car1G').style.display = 'none';
    document.querySelector('#car2R').style.display = 'none';
    document.querySelector('#car2Y').style.display = 'none';
    document.querySelector('#car2G').style.display = 'none';
    document.querySelector('#preview').style.display = 'none';
    document.querySelector('#preview1').style.display = 'none';
    document.querySelector('#player1').style.display = 'none';
    document.querySelector('#player2').style.display = 'none';
    document.querySelector('#player2box').style.display = 'none';
    document.querySelector('#player1box').style.display = 'none';
    document.querySelector('#delta').style.display = 'none';
    document.querySelector('#delta_name').style.display = 'none';
    document.querySelector('#square').style.display = 'none';
    document.querySelector('#setST1').style.display = 'none';
    document.querySelector('#setST2').style.display = 'none';
    document.querySelector('#setST3').style.display = 'none';
    document.querySelector('#setST4').style.display = 'none';
    document.querySelector('#stoplight').style.display = 'block';
    setTimeout(function() {
      document.getElementById('stoplight').src = "../game_imgs/yellow.png";
    }, 1500);
    setTimeout(function() {
      document.getElementById('stoplight').src = "../game_imgs/green.png";
    }, 2500);
    setTimeout(function() {
      document.querySelector('#stoplight').style.display = 'none';
    }, 3500);
    setTimeout(function() {
      canMove = true;
    }, 3500);
    load();
    addX();
    addX1();



  }

  e.preventDefault();


}

function keysReleased(e) {
  // mark keys that were released



  keys[e.keyCode] = false;
}
