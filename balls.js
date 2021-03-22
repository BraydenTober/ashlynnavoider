function addBall() {
    let chosenImage;
    let randNum = randomInt(0, 10);
    if (randNum < 5) {
        chosenImage = ashlynn2Img;
    } else {
        chosenImage = ashlynnImg;
    }
    return {
        x: randomInt(0, cnv.width),
        y: randomInt(0),
        r: randomInt(50, 100),
        img: chosenImage,
        speed: randomDec(0.5, 3)
    }
}

function newBall() {
    balls.push(addBall());
}

function createBalls(total) {
    let tempArray = [];
    for (i = 0; i <= total; i++) {
        tempArray.push(addBall());
    }
    return tempArray;
}

function drawBall(ball) {
   Image(ball.img, ball.x, ball.y, ball.r, ball.r);
}

function moveBall(ball, maxBalls) {
    if (ball.y < cnv.height + 20) {
        ball.y += ball.speed // Random speed for the snowflake
    } else {
        // Moves snowflake above the canvas, and at a random X position when it reaches the bottom
        ball.y = -10;
        ball.x = randomInt(1, cnv.width);
        let randNum = Math.random()
        if (randNum < 0.05) {
            newBall();
            slowSpeed = slowSpeed + 0.025;
            fastSpeed = fastSpeed + 0.025;
            player[2] = player[2] + 1;
            ball.speed = randomInt(slowSpeed, fastSpeed);
        }
    }
}

function CheckForHits(detector) {
    let result = false;
    for (i = 0; i < balls.length; i++) {
        if (detector[0] > balls[i].x && detector[0] < balls[i].x + balls[i].r && detector[1] > balls[i].y && detector[1]< balls[i].y + balls[i].r) {
            result = true;
            balls[i].color = "red";
        }
    }
    return result;
}



function VisualizeHitboxes(hitDetectors) {
    Circle(hitDetectors[0][0], hitDetectors[0][1], 5, "fill");
    Circle(hitDetectors[1][0], hitDetectors[1][1], 5, "fill");
    Circle(hitDetectors[2][0], hitDetectors[2][1], 5, "fill");
    Circle(hitDetectors[3][0], hitDetectors[3][1], 5, "fill");
    Circle(hitDetectors[4][0], hitDetectors[4][1], 5, "fill");
    Circle(hitDetectors[5][0], hitDetectors[5][1], 5, "fill");
    Circle(hitDetectors[6][0], hitDetectors[6][1], 5, "fill");
    Circle(hitDetectors[7][0], hitDetectors[7][1], 5, "fill");
}
