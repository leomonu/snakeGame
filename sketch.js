const Engine = Matter.Engine;
const   World = Matter.World;
const    Bodies = Matter.Bodies;
    var engine;
    var world;

    var gameState = 'PLAY';

var rat;

var rand = Math.floor((Math.random() * 750) + 50);
var rand1 = Math.floor((Math.random() * 350) + 50);

var snake = [];







function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;


  for(var i = 0;i<3;i++){
    snake.push(new Snake(400 + (i * 10),200,10,10)) 
   }


  

  

  rat = new Rat(rand,rand1,10,10);
}

function draw() {
  Engine.update(engine);
  background("yellow"); 
  if(gameState === 'PLAY'){
    if(keyIsDown(UP_ARROW)){

      snake[0].px =  snake[0].x;
      snake[0].py =  snake[0].y;

      snake[0].y =  snake[0].y -10;


      moveSnakeBody()


    }
     if(keyIsDown(DOWN_ARROW)){
      snake[0].px =  snake[0].x;
      snake[0].py =  snake[0].y;
      snake[0].y =  snake[0].y +10;


      moveSnakeBody()
    }
     if(keyIsDown(LEFT_ARROW)){
      snake[0].px =  snake[0].x;
      snake[0].py =  snake[0].y;
      snake[0].x =  snake[0].x -10;


      moveSnakeBody()
    }
     if(keyIsDown(RIGHT_ARROW)){
      snake[0].px =  snake[0].x;
      snake[0].py =  snake[0].y;
      snake[0].x =  snake[0].x +10;


      moveSnakeBody()
    }

    // if(snake.x === rat.x  && snake.y === rat.y){
    //   rat.x =  Math.floor((Math.random() * 750) + 50);
    //   rat.y = Math.floor((Math.random() * 350) + 50);
    // }
    if((snake[0].x > rat.x-10 && snake[0].x < rat.x+10) && (snake[0].y > rat.y-10 && snake[0].y < rat.y+10) ){
      rat.x =  Math.floor((Math.random() * 750) + 50);
      rat.y =  Math.floor((Math.random() * 350) + 50);
     var tail = snake[snake.length-1]
      snake.push(new Snake(tail.px,tail.py,10,10))

      
    }
  }
  

if(snake[0].y>400 || snake[0].y<0 || snake[0].x>800 || snake[0].x<0){
  gameState = 'STOP';
}
if(gameState === 'STOP'){
  text ("YOU LOST",400,200);
  text ("Press space bar",500,200);

  if(keyIsDown(32) ){
    gameState = 'PLAY';
    snake = [];
    for(var i = 0;i<3;i++){
      snake.push(new Snake(400 + (i * 10),200,10,10)) 
     }
  }
  
}


for(var i = 0;i < snake.length ;i++){
  snake[i].display();
}

  
rat.display();

}
function moveSnakeBody(){
  for(var i = 1;i < snake.length;i++){
    snake[i].px =  snake[i].x;
    snake[i].py =  snake[i].y;
    
    snake[i].x =  snake[i-1].px;
    snake[i].y =  snake[i-1].py;
  }
}