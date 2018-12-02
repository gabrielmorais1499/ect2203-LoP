//windowWidth: 1326
//windowHeight: 639

var xJogador = 60;
var yJogador = 320;
var xObstaculo = 1400;
var yObstaculo = 290;
var xTiro=1400;
var yTiro=640;
var tiro=false;
var vidas=5;
var pontos=0;
var nivel=1;
//var municao;

function setup() {
  createCanvas(windowWidth, windowHeight);    
  background(0);                              
  //textSize(16); 
  
  //Informações na tela:
  textSize(20);
  textStyle(BOLD);
  text('PONTUAÇÃO: '+pontos, 50, 50);
  text('VIDAS: '+vidas, 1150, 50);
  textSize(13);  
  text('Nível '+nivel, 1230, 589);
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

  colisao();
}

function colisao(){
  //Colisão JOGADOR-OBSTÁCULO
  if ((xObstaculo-12<=xJogador+12 && xObstaculo+12>=xJogador-12) && (yObstaculo-5<=yJogador+5 && yObstaculo+5>=yJogador-5)){
    noLoop();        
    if(vidas>0){
      vidas--;
    }
    setTimeout(reiniciar, 1000);
  }

  //Colisão TIRO-OBSTÁCULO
  if(tiro==true){
    if(xTiro>xObstaculo-10 && (yTiro>=yObstaculo-10 && yTiro<=yObstaculo+10)){
      pontos+=20;
      xTiro=1400;
      xObstaculo=1400;
    }
  }
}

function reiniciar(){
  xObstaculo=1400;
  xJogador=60;
  yJogador=320;
  redraw();
  loop();
}