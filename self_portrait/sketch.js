function setup(){
    createCanvas (640, 360);
}

function draw(){
    background("darkgreen")
    
    //eyes
    fill("blue");
    ellipse(320, 180, 100);
    ellipse(200, 180, 100);
    
    //face
    fill("black");
    rect(320, 20, 100, 100);
    
    //ears
    fill("orange")
    ellipse(250, 180, 100);
    ellipse(120, 180, 100);
    
    //mouth
    stroke("gray")
    line(152, 250, 250, 280)
}