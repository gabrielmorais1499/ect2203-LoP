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
  rect (xObstaculo, yObstaculo, 50, 50);                   
  fill(255, 255, 255);  
  
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Informações na tela:
  textSize(20);
  textStyle(BOLD);
  text('PONTUAÇÃO: '+pontos, 50, 50);
  text('VIDAS: '+vidas, 1150, 50);
  textSize(13);  
  text('Nível '+nivel, 1230, 589);
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}
  
function draw() {
  
   //Fazer obstáculo se mover
   xObstaculo = xObstaculo - 10;
   if (xObstaculo<0){
     xObstaculo = 1400;
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
   
   clear();           //Limpa a tela após o movimento
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
