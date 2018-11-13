
var sketchProc = function (processingInstance) {
    with (processingInstance) {
        size(928, 64);
        frameRate(30);
        background(0, 68, 136);
        strokeWeight(2);

        fishColor = color(random(255), random(255), random(255));
        var x = 4;

        // fish generator
        drawFish = function (centerX, centerY, bodyLength, bodyHeight, bodyColor) {
            var tailWidth = bodyLength / 4;
            var tailHeight = bodyHeight / 2;
            // body
            stroke(0, 32, 68);
            fill(bodyColor);
            ellipse(centerX, centerY, bodyLength, bodyHeight);
            // tail
            fill(bodyColor);
            quad(centerX - bodyLength / 2, centerY, centerX - bodyLength / 1.5 - tailWidth, centerY - tailHeight, centerX - bodyLength / 2 - tailWidth, centerY, centerX - bodyLength / 1.5 - tailWidth, centerY + tailHeight);
            // eye
            fill(192, 192, 248);
            ellipse(centerX + bodyLength / 4, centerY, bodyHeight / 5, bodyHeight / 5);
        };

        $("#button1").click(function () {
            console.log("this: " + this.id)
            noStroke();
            fill(0, 68, 136);
            rect(0, 0, 256, 200);
            drawFish(162, 100, random(40, 160), random(64, 72), random(fishColor));
        });

        // render fish on the canvas
        drawFish(162, 100, random(40, 160), random(64, 72), random(fishColor));

        draw = function () {
            if (x < 1024) {
                noStroke();
                background(0, 68, 136);
                // fill(0, 68, 136);
                rectMode(CENTER);
                fill(255, 0, 0);
                rect(x-32, 32, 48, 32);
                rect(x, 48, 56, 24);
                triangle(x + 16, 24, x + 32, 24, x + 24, 32);
                triangle(x + 32, 36, x + 32, 62, x + 64, 62);
                ellipse(x - 4, 56, 16, 16);
                ellipse(x + 16, 56, 16, 16);
                x = x + 1;
                console.log("x: " + x);
            };
        };

    };
};

