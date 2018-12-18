/*
Final Project 
Jordan Alexis 
*/
var serial;
var portName = "COM16";
var sensorValue;
var sensorValue2;
var inMessage = [0, 0];


function setup() {
    createCanvas(1000, 500, WEBGL);
    rectMode(CENTER);

    serial = new p5.SerialPort();
    serial.on('connected', serverConnected);
    serial.on('open', portOpen);
    serial.on('data', serialEvent);
    serial.on('error', serialError);
    serial.on('close', portClose);

    serial.open(portName);
}

function serverConnected() {
    console.log('connected to server.');
}

function portOpen() {
    console.log('the serial port opened.');
}

function portClose() {
    console.log('The serial port closed.');
}

function serialError() {
    console.log("error");
}

function serialEvent() {
    var currentString = serial.readLine(); // read the incoming string
    trim(currentString); // remove any trailing whitespace
    if (!currentString) {
        return; // if the string is empty, do no more
    }
//    sensorValue = currentString; // save it for the draw method
    inMessage = split(currentString, "&");
    sensorValue = inMessage[0];
    sensorValue2 = inMessage[1];
}

function draw() {
    var c = map(sensorValue, 0, 1023, 0, 180);
    var radius = width * 1.5;
    background("black");

    var radius = width * 1.5;
    var vol = map(mouseY, 0, height, 1, 0);
    vol = constrain(vol, 0, 1);

    var pan = map(mouseX, 0, width, -1, 1);
    pan = constrain(pan, -1, 1);

    var rate = map(mouseX, 0, width, 0.25, 2);
    rate = constrain(rate, 0.25, 2);
    //Mover the world.
    //    orbitControl

    //    Camera
//    push();
    //    console.log(sensorValue);
    var r = map(sensorValue, 0, 1023, 0, 2 * PI);
    //        rotateX(r);
    //    var z = map(sensorValue, 0, 1023, 0, 100);
    //    var y = map(sensorValue, 0, 1023, 0, 100);
    camera(0, 0, x, y, 0, 0, 0, 1, 0);
    //    var x = map(sensorValue 0, width, -200, 200); //sensorValue add this
    //    var y = map(sensorValue, 0, height, -200, 200); //sensorValue add this
    var x = map(sensorValue, 0, width, -200, 100); //sensorValue add this
    var y = map(sensorValue2, 0, height, -200, 100); //sensorValue add this
    camera(0, 0, 200, x, y, 0, 0, 1, 0);
//    pop();

    normalMaterial();
    translate(0, 0, -600);
    for (var i = 0; i <= 12; i++) {
        for (var j = 0; j <= 12; j++) {
            push();
            var a = j / 12 * PI;
            var b = i / 12 * PI;
            translate(sin(2 * a) * radius * sin(b), cos(b) * radius / 2, cos(2 * a) * radius * sin(b));
            if (j % 2 === 0) {
                fill('white')
                rotateZ(frameCount * 0.02);
                rotateX(frameCount * 0.02);
                cone(40, 60);
            } else {
                fill('teal')
                rotateZ(frameCount * 0.05);
                rotateX(frameCount * 0.05);
                box(50, 30, 30);
            }
            pop();
        }
    }
}
