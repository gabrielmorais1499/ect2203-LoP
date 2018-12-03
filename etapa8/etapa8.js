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
var pontuacao=0;
var score=new Array();

function setup() {
  createCanvas(windowWidth-10, windowHeight);    
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

  //Tiro
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
      xObstaculo[i]=random(windowWidth, windowWidth+800);      
      pontos+=10;
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
    xTiro+=20;
  }

  if(xTiro>=width){
    tiro=false;
  }

  colisao();

  if (nivel==1){
    if(pontos==300){
      nivel+=1;
      score[nivel-1]=pontos;
      pontuacao+=pontos;      
      pontos=0;
      noLoop();
      setTimeout(reiniciar, 3000);      
    }
    
  }
  if(nivel==2){
    if(pontos==420){
      nivel+=1;
      score[nivel-1]=pontos;
      pontuacao+=pontos;
      pontos=0;
      noLoop();
      setTimeout(reiniciar, 3000);
    }
  }

  if(nivel==3){
    if(pontos==630){
      nivel+=1;
      score[nivel-1]=pontos;
      pontuacao+=pontos;
      pontos=0;
      noLoop();
      setTimeout(reiniciar, 3000);
    }
  }

  if(nivel==4){
    if(pontos==800){
      nivel+=1;
      score[nivel-1]=pontos;
      pontuacao+=pontos;
      noLoop();
      setTimeout(reiniciar, 3000);
      pontos=0;
    }
  }

  if(nivel==5){
    if(pontos==1080){
      nivel+=1;
      score[nivel-1]=pontos;
      pontuacao+=pontos;
      pontos=0;
      noLoop();
      setTimeout(reiniciar, 3000);
    }
  }
}

function colisao(){
  //Colisão JOGADOR-OBSTÁCULO
  for (var i=0; i<5; i++){
    if ((xObstaculo[i]<=xJogador+12 && xObstaculo[i]+12>=xJogador-12) && (yObstaculo[i]-5<=yJogador+5 && yObstaculo[i]+5>=yJogador-5)){
      noLoop();        
      if(vidas>0){
        vidas--;
        pontos=0;
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
        xObstaculo[i]=random(windowWidth, windowWidth+400);
        yObstaculo[i]=random(50, windowHeight-50);
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
  xTiro=1400;
  redraw();
  loop();
}