var Mode;
var windowWidth1;
var windowHeight1;

var r = 255
var g = 255
var b = 255
var AcircleX = 200
var AcircleY = 600

var DiPI1 = 25
var DiPI2 = 0
var DiPI3 = 0

var NumFails1 = 100
var NumFails2 = 0
var NumFails3 = 0

var CorrectAnswers = 0
var WrongAnswers = 0

var BigCircleR = 255
var BigCircleG = 255
var BigCircleB = 255

var SmallCircleR = 255
var SmallCircleG = 255
var SmallCircleB = 255

var PlayTime = false

function setup() {
  Mode = 0;
}

function mousePressed() {
  if (Mode != 0 && Mode != -1 && Mode != -2 && mouseX > 0 && mouseY > 0 && mouseX < 325 && mouseY < windowHeight && PlayTime == true || mouseX > 0 && mouseY > 125 && mouseX < windowWidth && mouseY < windowHeight && PlayTime == true) {
    Mode++;
    r = 0
    g = 255
    b = 0
    CorrectAnswers++;
  }
  if (Mode != 0 && Mode != -1 && Mode != -2 && mouseX > 325 && mouseY > 25 && mouseX < 575 && mouseY < 125 && PlayTime == true) {
    Mode++;
    r = 255
    g = 0
    b = 0
    WrongAnswers++;
  }

  if (mouseX > 235 && mouseX < 1000 && mouseY > 650 && mouseY < windowHeight && Mode == 0 || mouseX > 265 && mouseX < 1000 && mouseY > 550 && mouseY < windowHeight && Mode == 0 || mouseX > 300 && mouseX < 1000 && mouseY > 425 && mouseY < windowHeight && Mode == 0) {
    Mode = 1
    PlayTime = true
  }

  if (mouseX > 0 && mouseX < 200 && mouseY > 300 && mouseY < 500 && Mode == 0 || mouseX > 200 && mouseX < 225 && mouseY > 325 && mouseY < 475 && Mode == 0 || mouseX > 25 && mouseX < 175 && mouseY > 275 && mouseY < 500 && Mode == 0 || mouseX > 175 && mouseX < 225 && mouseY > 450 && mouseY < 525 && Mode == 0) {
    Mode = -1
  }

  if (Mode == -1 && mouseX > 240 && mouseY > 125 && mouseX < 280 && mouseY < 185) {
    if (DiPI1 < 149) {
      DiPI1++;
    } else {
      DiPI1 = DiPI1
    }
  }

  if (Mode == -1 && mouseX > 240 && mouseY > 185 && mouseX < 280 && mouseY < 250) {
    if (DiPI1 > 1) {
      DiPI1--;
    } else {
      DiPI1 = DiPI1
    }
  }

  if (Mode == -1 && mouseX > 50 && mouseY > windowHeight - 150 && mouseX < 250 && mouseY < windowHeight - 150 + 100) {
    Mode = 0
  }

  if (Mode == -2 && mouseX > windowWidth - 275 && mouseY > windowHeight - 125 && mouseX < windowWidth - 275 + 250 && mouseY < windowHeight - 125 + 100) {
    Mode = 0
    if (DiPI3 + DiPI2 + DiPI1 > 1) {
      DiPI1 = DiPI3 + DiPI2 + DiPI1
    }
    if (DiPI3 + DiPI2 + DiPI1 < 1) {
      DiPI1 = 1
    }
  }
}

// windowWidth - 275, windowHeight -125, 250, 100

function draw() {
  if (Mode > DiPI3 + DiPI2 + DiPI1) {
    Mode = -2
  }

  createCanvas(windowWidth, windowHeight);

  windowHeight1 = windowHeight + windowWidth / 2
  windowHeight1 = windowHeight1 / 21
  windowWidth1 = windowHeight + windowWidth / 2
  windowWidth1 = windowWidth1 / 16

  if (Mode == -2) {
    PlayTime = false
    background(255)
    fill(0)
    strokeWeight(0)
    textSize(65)
    text('Submit', 295, 785)
    textSize(100)
    text('You Got:', 100, 250)

    if (DiPI3 + DiPI2 + DiPI1 < 99 && CorrectAnswers < 9 && CorrectAnswers > -1) {
      text(DiPI3 + DiPI2 + DiPI1, 300, 350)
      text(CorrectAnswers + '/', 215, 350)
    }
    if (DiPI3 + DiPI2 + DiPI1 < 99 && CorrectAnswers > 9 && CorrectAnswers < 99) {
      text(DiPI3 + DiPI2 + DiPI1, 300, 350)
      text(CorrectAnswers + '/', 160, 350)
    }
    if (DiPI3 + DiPI2 + DiPI1 > 99 && CorrectAnswers > 99 && CorrectAnswers < 149) {
      text(DiPI3 + DiPI2 + DiPI1, 300, 350)
      text(CorrectAnswers + '/', 115, 350)
    }
    if (DiPI3 + DiPI2 + DiPI1 > 99 && CorrectAnswers < 99 && CorrectAnswers > 149) {
      text(DiPI3 + DiPI2 + DiPI1, 275, 350)
      text(CorrectAnswers + '/', 140, 350)
    }
    if (DiPI3 + DiPI2 + DiPI1 > 99 && CorrectAnswers < 99 && CorrectAnswers > -1) {
      text(DiPI3 + DiPI2 + DiPI1, 250, 350)
      text(CorrectAnswers + '/', 175, 350)
    }
    if (DiPI3 + DiPI2 + DiPI1 > 99 && CorrectAnswers < 99 && CorrectAnswers > 149) {
      text(DiPI3 + DiPI2 + DiPI1, 275, 350)
      text(CorrectAnswers + '/', 195, 350)
    }
    stroke(0)
    strokeWeight(5)
    noFill()
    rect(windowWidth - 275, windowHeight - 125, 250, 100)
  }

  if (Mode == -1) {
    CorrectAnswers = 0
    background(255)
    strokeWeight(5)
    rect(40, 60, 470, 200)
    rect(80, 145, 200, 80)
    rect(240, 145, 40)
    rect(240, 185, 40)
    line(250, 175, 260, 150)
    line(270, 175, 260, 150)
    line(250, 200, 260, 225)
    line(270, 200, 260, 225)
    rect(50, windowHeight - 150, 200, 100)
    strokeWeight(0)
    fill(0)
    textSize(25)
    text('How Many Numbers of PI Do You Want', 50, 100)
    text('to be tested on ?', 50, 125)
    textSize(75)
    text(DiPI1 + DiPI2 + DiPI3, 85, 212.5)
    text('Back', 65, 760)
  }
  if (Mode == 0) {
    CorrectAnswers = 0
    if (mouseX > 235 && mouseX < 1000 && mouseY > 650 && mouseY < windowHeight && Mode == 0 || mouseX > 265 && mouseX < 1000 && mouseY > 550 && mouseY < windowHeight && Mode == 0 || mouseX > 300 && mouseX < 1000 && mouseY > 425 && mouseY < windowHeight && Mode == 0) {
      BigCircleR = 150
      BigCircleG = 150
      BigCircleB = 150
    } else {
      BigCircleR = 255
      BigCircleG = 255
      BigCircleB = 255
    }

    if (mouseX > 0 && mouseX < 200 && mouseY > 300 && mouseY < 500 && Mode == 0 || mouseX > 200 && mouseX < 225 && mouseY > 325 && mouseY < 475 && Mode == 0 || mouseX > 25 && mouseX < 175 && mouseY > 275 && mouseY < 500 && Mode == 0 || mouseX > 175 && mouseX < 225 && mouseY > 450 && mouseY < 525 && Mode == 0) {
      SmallCircleR = 150
      SmallCircleG = 150
      SmallCircleB = 150
    } else {
      SmallCircleR = 255
      SmallCircleG = 255
      SmallCircleB = 255
    }

    background(255)
    strokeWeight(7)
    stroke(0)
    fill(BigCircleR, BigCircleG, BigCircleB)
    circle(600, 800, 750)
    fill(SmallCircleR, SmallCircleG, SmallCircleB)
    circle(100, 400, 250)
    noFill()
    strokeWeight(7)
    circle(100, 150, 2)
    circle(100, 400, 2)
    strokeWeight(3)
    line(25, 300, 175, 500)
    line(100, 400, 100, 275)
    circle(100, 150, 50)
    circle(AcircleX + 210, AcircleY + 73, 50)
    line(AcircleX + 210, AcircleY + 50, AcircleX + 195, AcircleY + 90)
    line(AcircleX + 210, AcircleY + 50, AcircleX + 225, AcircleY + 90)
    line(AcircleX + 185, AcircleY + 80, AcircleX + 235, AcircleY + 80)

    strokeWeight(1)
    fill(0)
    textSize(75)
    text('PL  Y', AcircleX + 100, AcircleY + 100)
    textSize(30)
    text('OPTIONS', 15, 490)
  }
  if (Mode == 1) {
    CorrectAnswers = 0
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('3', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)
    textSize(35)
    fill(150)
    text('Click The Screen If Correct.', windowWidth / 2 - windowWidth1 * 3, windowHeight / 2 + windowHeight1 * 5)
    text('Click The Wrong Button If Wrong.', windowWidth / 2 - windowWidth1 * 3.70, windowHeight / 2 + windowHeight1 * 5.50)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 2) {
    background(r, g, b);
    fill(0)
    textSize(windowWidth / 2)
    text('.', windowWidth / 2 - windowWidth1 * 0.50, windowHeight / 2 + windowHeight1)
    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 3) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('1', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 4) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('4', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }

  if (Mode == 5) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('1', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 6) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('5', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 7) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('9', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 8) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('2', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 9) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('6', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 10) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('5', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 11) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('3', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 12) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('5', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 13) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('8', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 14) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('9', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 15) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('7', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 16) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('9', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 17) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('3', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 18) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('2', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 19) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('3', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 20) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('8', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 21) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('4', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 22) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('6', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 23) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('2', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 24) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('6', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 25) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('4', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 26) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('3', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 27) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('3', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 28) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('8', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 29) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('3', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 30) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('2', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 31) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('7', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 32) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('9', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 33) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('5', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 34) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('0', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 35) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('2', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 36) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('8', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 37) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('8', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 38) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('4', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 39) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('1', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 40) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('9', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 41) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('7', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 42) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('1', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 43) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('6', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 44) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('9', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 45) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('3', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 46) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('9', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 47) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('9', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 48) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('3', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 49) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('7', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  if (Mode == 50) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('5', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 51) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('1', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 52) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('0', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 53) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('5', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 54) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('8', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 55) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('2', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 56) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('0', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 57) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('9', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 58) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('7', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 59) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('4', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 60) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('9', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 61) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('4', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 62) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('4', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 63) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('5', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 64) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('9', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 65) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('2', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 66) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('3', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 67) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('0', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 68) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('7', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 69) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('8', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 70) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('1', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 71) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('6', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 72) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('4', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 73) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('0', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 74) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('6', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 75) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('2', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 76) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('8', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 77) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('6', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 78) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('2', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 79) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('0', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 80) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('8', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 81) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('9', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 82) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('9', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 83) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('8', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 84) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('6', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 85) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('2', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 86) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('8', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 87) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('0', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 88) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('3', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 89) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('4', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 90) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('8', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 91) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('2', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 92) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('5', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 93) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('3', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 94) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('4', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 95) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('2', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 96) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('1', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 97) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('1', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 98) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('7', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 99) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('0', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  
  if (Mode == 100) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('6', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 101) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('7', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if (Mode == 102) {
    background(r, g, b);
    strokeWeight(1)
    fill(0)
    textSize(windowWidth / 2)
    text('9', windowWidth / 2 - windowWidth1, windowHeight / 2 + windowHeight1)

    fill(0)
    rect(windowWidth - 25, 35, 15, 100)
    rect(windowWidth - 265, 41, 255, 100)
    fill(255)
    strokeWeight(5)
    rect(windowWidth - 275, 25, 250, 100)
    fill(0)
    strokeWeight(1)
    textSize(windowWidth / 8)
    text('Wrong', windowWidth / 2 - windowWidth1 * -0.5, windowHeight / 2 + windowHeight1 * -6)
  }
  if(Mode != 0){
    if(Mode != -1){
      if(Mode != -2) {
        strokeWeight(1)
        textSize(25)
        text(' Correct Answers: ' + CorrectAnswers, 0, 35)
        text(' Wrong Answers: ' + WrongAnswers, 0, 65)
      }
    }
  }
}