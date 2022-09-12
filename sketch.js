var candies = []

var bucket = {
  x: 70,
  y: 100,
  size: 2,
  display : function() {
    translate(this.x, this.y);
    scale(this.size);
    // Handle
    stroke(0);
    strokeWeight(2);
    noFill();
    ellipse(this.x, this.y-15, 50, 100)
    //main bucket
    noStroke()
    fill(241, 121, 0);
    arc(this.x, this.y, 80, 80, -PI/4, -PI*3/4, OPEN);
    //nose
    fill(0);
    triangle(this.x-5, this.y+5, this.x+5, this.y+5, this.x, this.y);
    
    // right eyes
    triangle(this.x-25, this.y-10, this.x-5, this.y-10, this.x-15, this.y-20);
    
    //left eye
    triangle(this.x+25, this.y-10, this.x+5, this.y-10, this.x+15, this.y-20);
    
    // mouth
    arc(this.x, this.y+10, 60, 40, 0, PI, OPEN);
    //teeth
    fill(241, 121, 0);
    triangle(this.x+5, this.y+10, this.x+10, this.y+20, this.x+15, this.y+10);
    triangle(this.x-5, this.y+10, this.x-10, this.y+20, this.x-15, this.y+10);
    scale(1/this.size);
    translate(-this.x, -this.y)
  }
} //end bucket

class Spider {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.velocity = -1/2;
  }
  display() {
    //body
    fill(0);
    ellipse(this.x,this.y,10,10);

    // legs
    noFill();
    stroke(0);
    curve(this.x,this.y,this.x,this.y,this.x-3,this.y+8,this.x+10,this.y+60);
    curve(this.x,this.y,this.x,this.y,this.x+3,this.y+8,this.x+10,this.y+60);
    curve(this.x,this.y,this.x,this.y,this.x+10,this.y+8,this.x+10,this.y+60);
    curve(this.x,this.y,this.x,this.y,this.x-10,this.y+8,this.x+10,this.y+60);
    curve(this.x,this.y,this.x,this.y,this.x+10,this.y,this.x+10,this.y+60);
    curve(this.x,this.y,this.x,this.y,this.x-10,this.y,this.x+10,this.y+60);
    curve(this.x,this.y,this.x,this.y,this.x+8,this.y-7,this.x+10,this.y+60);
    curve(this.x,this.y,this.x,this.y,this.x-8,this.y-7,this.x+10,this.y+60);
    
    // web
    stroke(255);
    line(this.x, 0, this.x, this.y-5);
    noStroke();
  }
  update() {
    if (this.y == 100 || this.y == 20) {
      this.velocity *= -1;  // change direction
    }
    this.y += this.velocity;
  }
} // end Spider

var spiders = [new Spider(), new Spider(), new Spider(), new Spider()];


function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);
  twixImage = loadImage('candy/twix.png');
  hersheysImage = loadImage('candy/hersheys.png');
  lollipopImage = loadImage('candy/lollipop.png');
  roloImage = loadImage('candy/rolo.png');
  
  
  spiders[0].x = 90;
  spiders[0].y = 90;
  spiders[1].x = 150;
  spiders[1].y = 20;
  spiders[2].x = 210;
  spiders[2].y = 50;
  spiders[3].x = 330;
  spiders[3].y = 90;
}


function draw() {
  background(120);
  
  for (var i = 0; i < spiders.length; i++) {
    spiders[i].display();
    spiders[i].update();
  }
  
  // Show falling candy
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] )
    candies[i].display();
    candies[i].update();
  }
  
  // Remove candy that reaches bucket
  for (let i = candies.length - 1; i >= 0; i--) {
    if (candies[i].y > height-70) {
        candies.splice(i, 1);
    }
  }
  bucket.display(2);
}

function mousePressed() {
  
  let twix = {
    x:200,
    y: 0,
    size: 0,
    startCount: 0,
    display : function() {
      translate(this.x, this.y);
      scale(this.size);
      // Push/pop the rotation.
      push();
      rotate(((this.startCount - frameCount)/width) * PI * 2); 
      image(twixImage, 0, 0);
      pop();
      // undo scaling
      scale(1/this.size);
      translate(-this.x, -this.y);   
    },
    update : function() {
      this.y += 1;
    }
  } // end twix
  
  let hersheys = {
    x : 200,
    y : 0,
    size : 0,
    startCount: 0,
    display : function() {
      translate(this.x, this.y);
      scale(this.size);
      // Push/pop the rotation.
      push();
      rotate(((this.startCount - frameCount)/width) * PI * 2); 
      image(hersheysImage, 0, 0);
      pop();
      // undo scaling
      scale(1/this.size);
      translate(-this.x, -this.y);   
    },
    update : function() {
      this.y += 1;
    }
  } // end hersheys
  
  let rolo = {
    x: 200,
    y : 0,
    size : 0.1,
    startCount: 0,
    display : function() {
      translate(this.x, this.y);
      scale(this.size);
      // Push/pop the rotation.
      push();
      rotate(((this.startCount - frameCount)/width) * PI * 2); 
      image(roloImage, 0, 0);
      pop();
      // undo scaling
      scale(1/this.size);
      translate(-this.x, -this.y);   
    },
    update : function() {
      this.y += 1;
    }
  } // end rolo
  
  let lollipop = {
    x:200,
    y : 0,
    size: 0,
    startCount: 0,
    display : function() {
      translate(this.x, this.y);
      scale(this.size);
      // Push/pop the rotation.
      push();
      rotate(((this.startCount - frameCount)/width) * PI * 2); 
      scale(0.5);  // lollipop image is too large, so this shrinks it.
      image(lollipopImage, 0, 0);
      pop();
      // undo scaling
      scale(1/this.size);
      translate(-this.x, -this.y);   
    },
    update : function() {
      this.y += 1;
    }
  } // end lollipop
  
  let candyOptions = [twix, hersheys, rolo, lollipop];
  let candySizes = [0.1, 0.15, 0.2];
  let newCandy = candyOptions[floor(random(4))];
  newCandy.size += candySizes[floor(random(3))];
  newCandy.startCount = frameCount;
  candies.push(newCandy);
}
