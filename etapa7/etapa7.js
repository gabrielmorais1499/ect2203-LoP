//windowWidth: 1326
//windowHeight: 639

var xJogador = 60;
var yJogador = 320;
var xObstaculo= new Array();
var yObstaculo = new Array();
var xTiro=1400;
var yTiro=640;
var tiro=false;
var vidas=5;
var pontos=0;
var nivel=1;
var municao=7;

function setup() {
  createCanvas(windowWidth, windowHeight);    
  background(0);                              
  //textSize(16);  

  for(var i=0; i<5; i++){    
    yObstaculo[i]=random(50, windowHeight-50);
    xObstaculo[i]=random(windowWidth, windowWidth+400);
  }
}
  
function draw() {
  display(); 
  move();
  clear();           //Limpa a tela após o movimento
  //setup();
  display();
   
  /*
  *Verificar tamanho da tela
  *text (windowHeight, 50, 50);
  *text(windowWidth, 100, 50);
  */
}

function display(){
  background(0);
  //Informações na tela:
  textSize(20);
  textStyle(BOLD)
  fill(255);
  text('PONTUAÇÃO: '+pontos, 50, 50);
  text('VIDAS: '+vidas, 1150, 50);
  textSize(13);  
  text('Nível '+nivel, 1230, 589);

  //Jogador
  fill(255, 255, 255);
  ellipse(xJogador, yJogador, 50, 50);                                 
  
  //Obstáculo
  for (var i=0; i<5; i++){
    fill(255, 255, 255);
    rect (xObstaculo[i], yObstaculo[i], 50, 50);
  }  

  if(tiro==true){
    fill(255,0, 0);
    noStroke();
    ellipse(xTiro, yTiro, 20, 20);
  }
}

function move(){
  //Fazer obstáculo se mover
  for(var i=0; i<5; i++){
    xObstaculo[i] = xObstaculo[i] - 10;
    if (xObstaculo[i]<0){
      yObstaculo[i]=random(50, windowHeight-50);
      xObstaculo[i]=random(windowWidth, windowWidth+400);
    }
  }  

  //Fazer jogador mover para frente
  if (keyIsDown(RIGHT_ARROW)){
    xJogador += 10;
  }
  
  //Fazer jogador mover para trás
  if (keyIsDown(LEFT_ARROW)){
   xJogador -= 10;
  }
  
  //Fazer jogador mover para cima 
  if (keyIsDown(UP_ARROW)){
    yJogador -= 10;
  }
  
  //Fazer jogador mover para baixo
  if (keyIsDown(DOWN_ARROW)){
    yJogador += 10;     
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
  for (var i=0; i<5; i++){
    if ((xObstaculo[i]-12<=xJogador+12 && xObstaculo[i]+12>=xJogador-12) && (yObstaculo[i]-5<=yJogador+5 && yObstaculo[i]+5>=yJogador-5)){
      noLoop();        
      if(vidas>0){
        vidas--;
      }
      setTimeout(reiniciar, 1000);
    }
  }

  //Colisão TIRO-OBSTÁCULO
  for (var i=0; i<5; i++){
    if(tiro==true){
      if(xTiro>xObstaculo[i]-10 && (yTiro>=yObstaculo[i]-10 && yTiro<=yObstaculo[i]+10)){
        pontos+=20;
        xTiro=1400;
        yObstaculo[i]=random(50, windowHeight-50);
        xObstaculo[i]=random(windowWidth, windowWidth+400);
      }
    }
  }
}

function reiniciar(){
  for(var i=0; i<5; i++){    
    yObstaculo[i]=random(50, windowHeight-50);
    xObstaculo[i]=random(windowWidth, windowWidth+400);
  }
  xJogador=60;
  yJogador=320;
  redraw();
  loop();
}