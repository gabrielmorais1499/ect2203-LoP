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
let running=true;

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
   if (xObstaculo<0){
     xObstaculo=1400;
     pontos+=10;
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
     
   if ((xObstaculo-12<=xJogador+12 && xObstaculo+12>=xJogador-12) && (yObstaculo-5<=yJogador+5 && yObstaculo+5>=yJogador-5)){
     noLoop();        
     if(vidas>0){
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

function reiniciar(){
  xObstaculo=1400;
  xJogador=60;
  yJogador=320;
  redraw();
  loop();
}
