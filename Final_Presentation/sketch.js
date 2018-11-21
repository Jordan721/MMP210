/*
Final Presentation Slides
Week 13
Jordan Alexis 
*/

var slide = 0;
var adu;
var poten;
var breadb;
var ani;
var AFrame;

function preload() {
    adu = loadImage('Photos_Final/poten.jpg');
    poten = loadImage('Photos_Final/kit.jpg');
    breadb = loadImage('Photos_Final/breadb.jpg');
    AFrame = loadImage('Photos_Final/AFrame_Pic.png')
    ani = loadImage('Photos_Final/Sony_Pictures_Animation_logo.png')
}

function setup() {
    createCanvas(800, 500);
    textSize(60);
    textFont('Allerta Stencil');
    textAlign(CENTER, CENTER);
    rectMode(CENTER);
}

function draw() {
    background(220);
    if (slide == 0) {
        text("Final Project Idea: Animation", width / 2, height / 2);
    } else if (slide == 1) {
        textSize(30);
        text("Sensor I'm using to animate A-frame", 500, 100);
        // potentiometer pic
        image(poten, 400, 200, 100, 200);
        image(adu, 300, 200, 100, 200);
        image(breadb, 500, 200, 100,200);

    } else if (slide == 2) {
        text("theme:", 200, 40);
        image(ani, 400, 200, 390, 160);

    } else if (slide == 3) {
        text("Image of Aframe", 200, 20);
        image(AFrame, 200, 200, 390, 300);
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
