//windowWidth: 1326
//windowHeight: 639

var xJogador = 60;
var yJogador = 320;
var xObstaculo = 1400;
var yObstaculo = 290;
var xTiro = 1400;
var yTiro = 640;

var tiro=false;

function setup() {
  createCanvas(windowWidth, windowHeight);    //Cria o tamanho da tela
  background(0);                              //Cor de fundo
  //textSize(16);
}

function draw() {
  display(); 
  move();
  clear();           //Limpa a tela após o movimento
  setup();
  display();
   
  /*
  *Verificar tamanho da tela
  *text (windowHeight, 50, 50);
  *text(windowWidth, 100, 50);
  */
}

function display(){
  //Jogador
  fill(255, 255, 255);
  ellipse(xJogador, yJogador, 50, 50);                                 
  //Obstáculo
  rect (xObstaculo, yObstaculo, 50, 50);

  if(tiro==true){
    fill(255,0, 0);
    noStroke();
    ellipse(xTiro, yTiro, 20, 20);
  }
}

function move(){
  //Fazer obstáculo se mover
  xObstaculo = xObstaculo - 5;
  if (xObstaculo<0){
    xObstaculo = 1400;
  }
  
  //Fazer jogador mover para frente
  if (keyIsDown(RIGHT_ARROW)){
    xJogador += 8;
  }
  
  //Fazer jogador mover para trás
  if (keyIsDown(LEFT_ARROW)){
   xJogador -= 8;
  }
  
  //Fazer jogador mover para cima 
  if (keyIsDown(UP_ARROW)){
    yJogador -= 8;
  }
  
  //Fazer jogador mover para baixo
  if (keyIsDown(DOWN_ARROW)){
    yJogador += 8;     
  }

  if(keyIsDown(32) && xTiro>=width){
    tiro=true;
    xTiro=xJogador;
    yTiro=yJogador;    
  }

  if(tiro==true){
    xTiro+=10;
  }

  if(xTiro>=width){
    tiro=false;
  }
}