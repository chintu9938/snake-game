// alert("hello");
var can=document.getElementById("canvas");
var cntx= can.getContext("2d");
var snakeWidth=10;
var snakeHeight=10;
var dir="down";
function snakeDraw(x,y){
  cntx.fillStyle ="white";
  cntx.fillRect(x*snakeWidth,y*snakeHeight,snakeWidth,snakeHeight);
  cntx.fillStyle ="black";
  cntx.strokeRect(x*snakeWidth,y*snakeHeight,snakeWidth,snakeHeight);
}
// create snake
var length=4;
snake =[];
for(var i=length-1; i>=0; i--){
  snake.push({x:i,y:0})
}
// snake.pop();
// control dir();
document.addEventListener("keydown",dirControl);
function dirControl(event){
  // console.log(event);
if(event.keyCode==37 && dir!="right"){
  dir="left";
}
else if(event.keyCode==38 && dir!="down"){
  dir="up";
}
else if(event.keyCode==39 && dir!="left"){
  dir="right";
}
else if(event.keyCode==40 && dir!="up"){
  dir="down";
}
}
// create food

var food={
  x:Math.round( Math.random()* (can.width/snakeWidth)+1),
  y:Math.round( Math.random()* (can.height/snakeHeight)+1)
}
                 // draw food
function drawFood(x,y){
  cntx.fillStyle ="red";
  cntx.fillRect(x*snakeWidth,y*snakeHeight,snakeWidth,snakeHeight);
  cntx.fillStyle ="black";
  cntx.strokeRect(x*snakeWidth,y*snakeHeight,snakeWidth,snakeHeight);
}
          // draw function
function draw(){
  cntx.clearRect(0,0,can.width,can.height);
  for(var i= 0; i<snake.length;i++){
    var X = snake[i].x;
    var Y = snake[i].y;
    snakeDraw(X,Y);
  }
  drawFood(food.x,food.y);
     // snake.pop();
                // snake head
  var snakeX= snake[0].x;
  var snakeY= snake[0].y;
  if(snakeX < 0 || snakeY < 0|| snakeX >= can.width/snakeWidth|| snakeY >=can.height/snakeHeight){
    alert("Game Over");
  // setTimeout(function(){ alert("GameOver"); },1000);
  }
if(dir=="right"){ snakeX++}
else if(dir=="left"){snakeX--}
else if(dir=="up"){snakeY--}
else if(dir=="down"){snakeY++}
if(snakeX==food.x && snakeY==food.y){
  food={
    x:Math.round( Math.random()* (can.width/snakeWidth-1)+1),
    y:Math.round( Math.random()* (can.height/snakeHeight-1)+1)
  }
  var newHead = {
           x:snakeX,
           y:snakeY
          }
} else {
    snake.pop();
     var newHead = {
      x:snakeX,
      y:snakeY
    }
}

  // new head
  // snakeX++
  // var newHead = {
  //   x:snakeX,
  //   y:snakeY
  // }
  // snakeX++
snake.unshift(newHead);
 } //end draw function
setInterval(draw,100);
// draw();


// snakeDraw(48,0);
// function demoX(x,y){
//   cntx.fillStyle ="green";
//   cntx.fillRect(x*snakeWidth,y*snakeHeight,can.width,snakeHeight);
// }
// for (var i = 0; i <=50; i++) {
//   i++
//   demoX (0,i);
// }
//   // function snakeDraw2(x,y){
//  //   cntx.fillStyle ="pink";
// //   cntx.fillRect(x*snakeWidth,y*snakeHeight,snakeWidth,snakeHeight);
// // }
// // snakeDraw2(0,48);
// function demoY(x,y){
//   cntx.fillStyle ="green";
//   cntx.fillRect(x*snakeWidth,y*snakeHeight,10,500);
// }
// for (var i = 0; i<=50; i++) {
//   i++;
//   demoY(i,0);
// }
// drawSnake(0,1);
