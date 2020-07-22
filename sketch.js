var canvas;
var position;

function setup() {
  database=firebase.database();
  console.log(database);
  createCanvas(1600,400);
  
  canvas=createSprite(250,250,400,400);
  canvas.shapeColor="red";

  var canvasPosition = database.ref('canvas.position');
  canvasPosition.on("value",readPosition,showError);
}

function draw() {
  background("white");
  if(position !== undefined){
    if(keyDown(LEFT_ARROW)){
      writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      writePosition(1,0);
    } 
    else if(keyDown(UP_ARROW)){
      writePosition(0,-1);
    } 
    else if(keyDown(DOWN_ARROW)){
      writePosition(0,+1);
    }
    drawSprites();
    }
   
  drawSprites();
}

function readPosition(data) {
  position=data.val();
  console.log(position.x);
  hypnoticBall.x=position.x;
  hypnoticBall.y=position.y;
}
function writePosition(x,y){
  database.ref('ball/position').set({
    'x':position.x+x,
    'y':position.y+y
  })
}