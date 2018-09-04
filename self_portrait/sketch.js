function setup(){
    createCanvas (640, 360);
}

function draw(){
    background("darkgreen")
    ellipse(320, 180, 100);
    
    rect(50, 50, 100, 100);
    ellipse(320, 120, 100);
    arc(150, 200, 50, 100, 0 PI);
}