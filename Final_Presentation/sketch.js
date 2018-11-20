/*
Final Presentation Slides
Week 13
Jordan Alexis 
*/

var slide = 0;
var adu;
var poten;
var breadb;

function preload() {
    adu = loadImage('Photos_Final/poten.jpg');
    poten = loadImage('Photos_Final/kit.jpg');
    breadb = loadImage('Photos_Final/breadb.jpg');
}

function setup() {
    createCanvas(800, 500);
    textSize(60);
    textFont('monospace');
    textAlign(CENTER, CENTER);
    rectMode(CENTER);
}

function draw() {
    background(220);
    if (slide == 0) {
        text("Final Project Idea Animated", width / 2, height / 2);
    } else if (slide == 1) {
        textSize(30);
        text("Force resisiting sensor", 100, 100);

        // fsr graphic
        rect(width / 2, 300, 50, 300);
        ellipse(width / 2, 200, 150);
    } else if (slide == 2) {
        text("theme: animation", 200, 20);
        image(adu, 200, 100, 40, 60);
        image(poten, 400, 100, 40, 60);
        image(breadb, 500, 100, 40, 60);
    }

}

function mousePressed() {
    if (mouseX > width / 2) {
        if (slide < 3) {
            slide++;
        }
    } else {
        if (slide > 0) {
            slide--;
        }
    }
}
