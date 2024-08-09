function setup() {
    createCanvas(400, 400);
     background(20);
  }
  
  function draw() {
    
   
  
    fill("white");
  
    //console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 20);
    }
  }
  