// BACKGROUND
function Background(color) {
    Fill(color);
    Rectangle(0, 0, cnv.width, cnv.height, "fill");
}

// STROKE COLOR
function Stroke(style) {
    ctx.strokeStyle = style;
}
// FILL COLOR
function Fill(style) {
    ctx.fillStyle = style;
}
// FONT 
function Font(fontSetting) {
    ctx.font = fontSetting;
}

// RECTANGLE
function Rectangle(x, y, w, h, mode) {
    if (mode === "fill") {
        ctx.fillRect(x, y, w, h);
    } else if (mode === "stroke") {
        ctx.strokeRect(x, y, w, h);
    }
}

// LINE
function Line(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

// CIRCLE
function Circle(x, y, r, mode) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    if (mode === "fill") {
        ctx.fill();
    } else if (mode === "stroke") {
        ctx.stroke();
    }
}

// TRIANGLE
function Triangle(x1, y1, x2, y2, x3, y3, mode) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    if (mode === "fill") {
        ctx.fill();
    } else if (mode === "stroke") {
        ctx.closePath();
        ctx.stroke();
    }
}

// TEXT
function Text(message, x, y, mode) {
    if (mode === "fill") {
        ctx.fillText(message, x, y)
    } else if (mode === "stroke") {
        ctx.strokeText(message, x, y)
    }
}

// ELLIPSE
function Ellipse(x, y, xRadius, yRadius, rotation, mode) {
    ctx.beginPath();
    ctx.ellipse(x, y, xRadius, yRadius, rotation, 0 , 2 * Math.PI);
    if (mode === "fill") {
        ctx.fill();
    } else if (mode === "stroke") {
        ctx.stroke();
    }
}

// IMAGES
function Image(img, x, y, w, h) {
    ctx.drawImage(img, x, y, w, h);
}
function ImageClip(img, xc, yc, wc, hc, x, y, w, h) {
    ctx.drawImage(img, xc, yc, wc, hc, x, y, w, h)
}