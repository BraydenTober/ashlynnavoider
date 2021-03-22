// MOVEMENT
//------------------------------------------------------------------------------
// Moves the player
function MovePlayer() {
    if (playerMovement[0] == true && playerMovement[3] == true) {
        if (player[1] > 0 && player[0] < cnv.width - player[2]) {
            player[1] = player[1] - moveSpeed / 2;
            player[0] = player[0] + moveSpeed / 2;
        }
    } else if (playerMovement[1] == true && playerMovement[3] == true) {
        if (player[1] < cnv.height - player[2] && player[0] < cnv.width - player[2]) {
            player[1] = player[1] + moveSpeed / 2;
            player[0] = player[0] + moveSpeed / 2;
        }
    } else if (playerMovement[1] == true && playerMovement[2] == true) {
        if (player[1] < cnv.height - player[2] && player[0] > 0) {
            player[1] = player[1] + moveSpeed / 2;
            player[0] = player[0] - moveSpeed / 2;
        }
    } else if (playerMovement[0] == true && playerMovement[2] == true) {
        if (player[1] > 0 && player[0] > 0) {
            player[1] = player[1] - moveSpeed / 2;
            player[0] = player[0] - moveSpeed / 2;
        }
    } else if (playerMovement[0] == true) {
        if (player[1] > 0) {
            player[1] = player[1] - moveSpeed;
        }
    } else if (playerMovement[1] == true) {
        if (player[1] < cnv.height - player[2]) {
            player[1] = player[1] + moveSpeed;
        }
    } else if (playerMovement[2] == true) {
        if (player[0] > 0) {
            player[0] = player[0] - moveSpeed;
        }
    } else if (playerMovement[3] == true) {
        if (player[0] < cnv.width - player[2]) {
            player[0] = player[0] + moveSpeed;
        }
    }
}
// Variables activated for movement
function keyDownHandler(event) {
    if (event.keyCode == 87 || event.keyCode == 38) {
        playerMovement[0] = true;
    } else if (event.keyCode == 83 || event.keyCode == 40) {
        playerMovement[1] = true;
    } else if (event.keyCode == 65 || event.keyCode == 37) {
        playerMovement[2] = true;
    } else if (event.keyCode == 68 || event.keyCode == 39) {
        playerMovement[3] = true;
    }
}

// Variables activated for movement
function keyUpHandler(event) {
    if (event.keyCode == 87 || event.keyCode == 38) {
        playerMovement[0] = false;
    } else if (event.keyCode == 83 || event.keyCode == 40) {
        playerMovement[1] = false;
    } else if (event.keyCode == 65 || event.keyCode == 37) {
        playerMovement[2] = false;
    } else if (event.keyCode == 68 || event.keyCode == 39) {
        playerMovement[3] = false;
    }
}
//------------------------------------------------------------------------------

