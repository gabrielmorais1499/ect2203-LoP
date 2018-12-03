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
var menu=0;
var velocidade=4;

//IMAGENS
var menu0, menu2, menu3;  //backgrounds menus
var nivel1, nivel2, nivel3, nivel4, nivel5; //backgrounds niveis
var sasuke, naruto, shuriken, clone;  //personagens + elementos

function preload(){
  menu0=loadImage('back0.jpg');
  menu2=loadImage('gameover.png');
  menu3=loadImage('yay.png');
  nivel1=loadImage('nivel1.jpg');
  nivel2=loadImage('nivel2.jpg');
  nivel3=loadImage('nivel3.jpg');
  nivel4=loadImage('nivel4.png');
  nivel5=loadImage('nivel5.jpg');
  sasuke=loadImage('sasuke.png');
  naruto=loadImage('naruto.png');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  image(menu0, 0, 0, windowWidth, windowHeight);

  for(var i=0; i<5; i++){    
    yObstaculo[i]=random(50, windowHeight-50);
    xObstaculo[i]=random(windowWidth, windowWidth+1000);
  }
}
  
function draw() {  
  display();
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

  if (menu==0){
    image(menu0, 0, 0, windowWidth, windowHeight);
    textSize(100);
    textStyle(BOLD)
    fill(255);
    text('I N I C I A R', 580, 250);    
  } 
  if(menu==1){
    image(nivel5, 0, 0, windowWidth, windowHeight);
    //Informações na tela:
    textSize(20);
    textStyle(BOLD)
    fill(255);
    text('PONTUAÇÃO: '+pontos, 50, 50);
    text('VIDAS: '+vidas, 1150, 50);
    textSize(13);  
    text('Nível '+nivel, 1230, 589);

    //Jogador
    image(sasuke, xJogador, yJogador, 90, 90);
    
    //Obstáculo
    for (var i=0; i<5; i++){
      image(naruto, xObstaculo[i], yObstaculo[i], 90, 90);
    }

    //Tiro
    if(tiro==true){
      fill(255,0, 0);
      noStroke();
      ellipse(xTiro, yTiro, 20, 20);
    }
    move();
  }
  if(menu==2){
    //GAME OVER
    image(menu2, 0, 0, windowWidth, windowHeight);
    textSize(100);
    textStyle(BOLD)
    fill(255);
    text('GAME OVER', 380, 250);    
  }
  if(menu==3){
    //ZERAR O JOGO
    image(menu3, 0, 0, windowWidth, windowHeight);
    
    textSize(30);
    textSize(BOLD);
    fill(255);
    text('Pontuação: ', 400, 150);
    textStyle(NORMAL);
    textSize(20);
    text('Nivel 1: ' + score[0], 400, 200);
    text('Nivel 2: ' + score[1], 400, 230);
    text('Nivel 3: ' + score[2], 400, 260);
    text('Nivel 4: ' + score[3], 400, 290);
    text('Nivel 5: ' + score[4], 400, 320);
    text('Total: ' + pontuacao, 400, 350);
  }
}

function move(){
  //Fazer obstáculo se mover
  for(var i=0; i<5; i++){
    xObstaculo[i] = xObstaculo[i]-velocidade;
    if (xObstaculo[i]<0){
      yObstaculo[i]=random(50, windowHeight-50);
      xObstaculo[i]=random(windowWidth, windowWidth+1000);      
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
  
  //Estabelecendo limites da tela
  if (xJogador>width-90) {
    xJogador -= 10;
  } else if (xJogador<20) {
    xJogador+=10;
  } 
  if (yJogador>height-90) {
    yJogador-=10;
  } else if (yJogador<20) {
    yJogador+=10;
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
  if(menu==1){
    if (nivel==1){
      //image(nivel1, 0, 0, windowWidth, windowHeight);
      if(pontos==300){
        nivel+=1;
        score[0]=pontos;
        pontuacao+=pontos;      
        pontos=0;
        velocidade+=2;
        noLoop();
        setTimeout(reiniciar, 3000); 
      }
      
    }
    if(nivel==2){
      //image(nivel2, 0, 0, windowWidth, windowHeight);
      if(pontos==420){
        nivel+=1;
        score[1]=pontos;
        pontuacao+=pontos;
        pontos=0;
        velocidade+=2;
        noLoop();
        setTimeout(reiniciar, 3000);
      }
    }

    if(nivel==3){
      //image(nivel3, 0, 0, windowWidth, windowHeight);
      if(pontos==630){
        nivel+=1;
        score[2]=pontos;
        pontuacao+=pontos;
        pontos=0;
        velocidade+=2;
        noLoop();
        setTimeout(reiniciar, 3000);
      }
    }

    if(nivel==4){
      //image(nivel4, 0, 0, windowWidth, windowHeight);
      if(pontos==800){
        nivel+=1;
        score[3]=pontos;
        pontuacao+=pontos;
        velocidade+=1;
        noLoop();
        setTimeout(reiniciar, 3000);
        pontos=0;
      }
    }

    if(nivel==5){
      //image(nivel5, 0, 0, windowWidth, windowHeight);
      if(pontos==1080){
        nivel+=1;
        score[4]=pontos;
        pontuacao+=pontos;
        pontos=0;
        velocidade+=1;
        noLoop();
        setTimeout(reiniciar, 3000);
      }
    }

    if(nivel==6){
      menu=3;
    }
  }
}

function colisao(){
  //Colisão JOGADOR-OBSTÁCULO
  for (var i=0; i<5; i++){
    if ((xObstaculo[i]<=xJogador+12 && xObstaculo[i]+12>=xJogador-12) && (yObstaculo[i]-5<=yJogador+5 && yObstaculo[i]+5>=yJogador-5)){
      noLoop();        
      if(vidas>0){
        vidas-=1;
        pontos=0;
      }
      setTimeout(reiniciar, 1000);
    }
    if(vidas==0){
      menu=2;
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
    xObstaculo[i]=random(windowWidth, windowWidth+1000);
  }
  xJogador=60;
  yJogador=320;
  xTiro=1400;
  redraw();
  loop();
}

function mousePressed(){
  if(menu==0){
    menu=1;
  }
  if(menu==3){
    menu=0;
  }
}