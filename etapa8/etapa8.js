//windowWidth: 1326
//windowHeight: 639

var xJogador = 60;
var yJogador = 320;
var xObstaculo = 1400;
var yObstaculo = 290;

var vidas=5;
var pontos=0;
var nivel=1;
//var municao;

function setup() {
  createCanvas(windowWidth, windowHeight);    
  background(0);                              
  //textSize(16);

  //Jogador
  ellipse(xJogador, yJogador, 50, 50);        
  fill(255, 255, 255);
  
  //Obstáculo  
  fill(255, 255, 255);  
  rect (xObstaculo, yObstaculo, 50, 50);    


  //Informações na tela:
  textSize(20);
  textStyle(BOLD);
  text('PONTUAÇÃO: '+pontos, 50, 50);
  text('VIDAS: '+vidas, 1150, 50);
  textSize(13);  
  text('Nível '+nivel, 1230, 589);
}

function draw() {

  //Fazer obstáculo se mover
  xObstaculo = xObstaculo - 10;
  if (xObstaculo<0) {
    xObstaculo=1400;
    pontos+=10;
  }


  //Fazer jogador mover para frente
  if (keyIsDown(RIGHT_ARROW)) {
    xJogador += 10;
  }

  //Fazer jogador mover para trás
  if (keyIsDown(LEFT_ARROW)) {
    xJogador -= 10;
  }

  //Fazer jogador mover para cima 
  if (keyIsDown(UP_ARROW)) {
    yJogador -= 10;
  }

  //Fazer jogador mover para baixo
  if (keyIsDown(DOWN_ARROW)) {
    yJogador += 10;
  }

  //Estabelecendo limites da tela
  if (xJogador>width-25) {
    xJogador -= 10;
  } else if (xJogador<25) {
    xJogador+=10;
  } 
  if (yJogador>height-20) {
    yJogador-=10;
  } else if (yJogador<20) {
    yJogador+=10;
  }


  if ((xObstaculo-12<=xJogador+12 && xObstaculo+12>=xJogador-12) && (yObstaculo-5<=yJogador+5 && yObstaculo+5>=yJogador-5)) {
    noLoop();        
    if (vidas>0) {
      vidas--;
    }
    setTimeout(reiniciar, 1000);
  }

  setup();

  /*
    *Verificar tamanho da tela
   *text (windowHeight, 50, 50);
   *text(windowWidth, 100, 50);
   */


  /*
     *Verificar coordenadas do mouse
   *text(mouseX, 50, 50);  
   *text(mouseY, 100, 50);
   */
}

function reiniciar() {
  xObstaculo=1400;
  xJogador=60;
  yJogador=320;
  redraw();
  loop();
}

function nivel1(){
  //xObstaculo = [5];
  //yObstaculo = [5];
  var cont=0;
  var tiro=7;
  display();
  move();
}

function nivel2(){
  //xObstaculo = [5];
  //yObstaculo = [5];
  var cont=0;//ate50
  var tiro=15;
  var velocidade=3;
  display();
  move();
}
function nivel3(){
  //xObstaculo = [7];
  //yObstaculo = [7];
  var cont=0;//ate56
  var tiro=20;
  var velocidade=10;
  display();
  move();
}

function nivel4(){
  //xObstaculo = [7];
  //yObstaculo = [7];
  var cont=0;//ate 63
  var tiro=25;
  var velocidade=17;
  display();
  move();
}

function nivel5(){
  //xObstaculo = [10];
  //yObstaculo = [10];
  var cont=0;//ate 90
  var tiro=30;
  var velocidade=27;
  display();
  move();
}
