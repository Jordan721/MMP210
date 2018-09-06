/*
Self Portrait 1
By Jordan Alexis 
MMP210
*/
function setup(){
    createCanvas (640, 360);
}

function draw(){
    background("darkgreen");
    
     //face
    rectMode(CENTER)
    fill("brown");
    ellipse (220, 20, 220, 420);
    
    //hair
    fill("black")
    rect(220, 20, 100, 120);
    
    //cheeks
    fill("blue");
    ellipse(50, 100, 40);
    ellipse(50, 200, 40);
      
    //eyes
    fill("orange")
    ellipse(250, 70, 30);
    ellipse(120, 70, 30);
    
    //nose
    stroke("gray")
    rect(75, 125, 20, 20);
    
    //mouth
    stroke("red")
    rect(75, 125, 70, 10, 10);
    
}