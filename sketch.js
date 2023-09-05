let x,y
let pemain1,pemain2

function garis(x,y){
   line(x,y,x, height-y)
}
function setup() {
  createCanvas(600, 400);
  
  
  pemain1 = new Pemain(100,'blue')
  pemain2 = new Pemain(height-100,'green')
  pemain3= new Pemain(height/2,'red')
  
}

function draw() {
  background(200);
  garis(100,50)
  garis(width-100,50)
  
  pemain1.tampilkan()
  pemain2.tampilkan()
  pemain3.tampilkan()
  
  pemain1.finish()
  pemain2.finish()
  pemain3.finish()
  
}


function keyPressed(){
  if (keyCode === LEFT_ARROW){
    pemain1.maju()
  }
    
  else if (keyCode === RIGHT_ARROW){
    pemain2.maju()
  }
  
 else if (keyCode === UP_ARROW){
    pemain3.maju()
  }
    
}