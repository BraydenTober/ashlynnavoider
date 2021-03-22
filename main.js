// VARIABLES
let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");

cnv.width = 1000;
cnv.height = 800;

let ballCounter = document.getElementById("totalBalls");
let ashlynnImg = document.getElementById("ashlynn");
let ashlynn2Img = document.getElementById("ashlynn2");
let dadImg = document.getElementById("dad");


let player = [x = 500, y = 400, size = 50]; // the player's x/y position, and size
let hitDetectors = [ // for detecting collisions with the circles
    [x = player[0] + (player[2] / 2), y = player[1]],
    [x = player[0] + (player[2] / 2), y = player[1] + player[2]],
    [x = player[0] + player[2], y = player[1] + (player[2] / 2)],
    [x = player[0], y = player[1] + (player[2] / 2)],
    [x = player[0], y = player[1]],
    [x = player[0] + player[2], y = player[1]],
    [x = player[0], y = player[1] + player[2]],
    [x = player[0] + player[2], y = player[1] + player[2]]
];
let playerMovement = [ // variables for movement
    up = false,
    down = false,
    left = false,
    right = false
];

let moveSpeed = 5;
let maxBalls = 20;
let balls = createBalls(maxBalls);
let Died = false;
let diedDebounce = false;

let slowSpeed = 0.5;
let fastSpeed = 3;

let health = cnv.width


// MAIN DRAW FUNCTION
requestAnimationFrame(draw);
function draw() {
    ballCounter.innerHTML = (balls.length + " Total Ashlynns")
    if ((Died) == false) {
        Background("Black");


        let hitResult1 = CheckForHits(hitDetectors[0]);
        let hitResult2 = CheckForHits(hitDetectors[1]);
        let hitResult3 = CheckForHits(hitDetectors[2]);
        let hitResult4 = CheckForHits(hitDetectors[3]);
        let hitResult5 = CheckForHits(hitDetectors[4]);
        let hitResult6 = CheckForHits(hitDetectors[5]);
        let hitResult7 = CheckForHits(hitDetectors[6]);
        let hitResult8 = CheckForHits(hitDetectors[7]);

        if (hitResult1 == true || hitResult2 == true || hitResult3 == true || hitResult4 == true || hitResult5 == true || hitResult6 == true || hitResult7 == true || hitResult8 == true) {
            if (health > 0) {
                health = health - 10;
                Fill("lightcoral");
                Rectangle(0, 0, cnv.width, cnv.height, "fill");
            } else {
                Died = true;
            }
        }
        for (i = 0; i < balls.length; i++) {
            moveBall(balls[i], maxBalls);
            drawBall(balls[i]);
        }
        Fill("cyan");
        Image(dadImg, player[0], player[1], player[2], player[2]);
        MovePlayer();
        hitDetectors = [ // updates the hitboxes locations
            [x = player[0] + (player[2] / 2), y = player[1]],
            [x = player[0] + (player[2] / 2), y = player[1] + player[2]],
            [x = player[0] + player[2], y = player[1] + (player[2] / 2)],
            [x = player[0], y = player[1] + (player[2] / 2)],
            [x = player[0], y = player[1]],
            [x = player[0] + player[2], y = player[1]],
            [x = player[0], y = player[1] + player[2]],
            [x = player[0] + player[2], y = player[1] + player[2]]
        ];

        // Health bar
        Fill("red");
        Rectangle(0, 0, health, 15, "fill");

        // VisualizeHitboxes(hitDetectors) // <-- uncomment this if you want to see the hitboxes
    } else {
        Fill("maroon");
        Rectangle(0, 0, cnv.width, cnv.height, "fill");
        Fill("white")
        Text("TOO MANY ASHLYNNS!!", 450, 400, "fill");
    }
    requestAnimationFrame(draw);
}

// LISTENERS
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);


