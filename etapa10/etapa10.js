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
var municao=10;
var pontuacao=0;
var score=new Array(0, 0, 0, 0, 0, 0);
var menu=0;
var velocidade=4;
var velocidadeSasuke=10;
var xKakashi=1140;
var yKakashi=445;

//IMAGENS
var menu0, menu2, menu3;  //backgrounds menus
var nivel1, nivel2, nivel3, nivel4, nivel5; //backgrounds niveis
var sasuke, naruto, shuriken, clone, kakashi;  //personagens + elementos

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
  shuriken=loadImage('shuriken.png');
  clone=loadImage('clone.png');
  naruto=loadImage('naruto.png');
  kakashi=loadImage('kakashi.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  image(menu0, 0, 0, windowWidth, windowHeight);

  for(var i=0; i<5; i++){    
    yObstaculo[i]=random(0, windowHeight-110);
    xObstaculo[i]=random(windowWidth, windowWidth+1000);
  }
}
  
function draw() {  
  display();
  colisao();
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

  if (menu==0){
    image(menu0, 0, 0, windowWidth, windowHeight);
    textSize(40);
    textStyle(BOLD);
    fill(255);
    strokeWeight(8);
    stroke(0);
    text('I N I C I A R', 237, 123);    
  } 
  if(menu==1){
    //BACKGROUNDS
    if(nivel==1){
      image(nivel1, 0, 0, windowWidth, windowHeight);
    } else if(nivel==2){
      image(nivel2, 0, 0, windowWidth, windowHeight);
    } else if(nivel==3){
      image(nivel3, 0, 0, windowWidth, windowHeight);
    } else if(nivel==4){
      image(nivel4, 0, 0, windowWidth, windowHeight);
    } else if(nivel==5){
      image(nivel5, 0, 0, windowWidth, windowHeight);
    }
    //Informações na tela:
    textSize(20);
    textStyle(BOLD)
    fill(255);
    strokeWeight(3);
    stroke(0);    
    text('PONTUAÇÃO: '+pontos, 50, 50);
    text('VIDAS: '+vidas, 1150, 50);
    textSize(13);  
    text('Nível '+nivel, 1230, 589);
    text('Shuriken: '+municao, 120, 589);

    //Jogador
    image(sasuke, xJogador, yJogador, 120, 120);
    
    //Obstáculo
    for (var i=0; i<5; i++){
      image(naruto, xObstaculo[i], yObstaculo[i], 105, 105);
    }

    //Tiro
    if(tiro==true){
      image(shuriken, xTiro, yTiro, 60, 60);
    }
    move();
  }
  if(menu==2){
    //GAME OVER
    image(menu2, 0, 0, windowWidth, windowHeight);
    textSize(100);
    textStyle(BOLD)
    fill(0);
    stroke(255);
    text('GAME OVER', 167, 150);
    /*strokeWeight(3);
    textSize(30);
    text('Tentar novamente', 60, 649);
    textSize(20);
    text('MENU', 1227, 649);
    if(menu==2){
      if((mouseX>=62 && mouseX<=363) && (mouseY>=627 && mouseY<=649)){      
        menu=1;
      } 
      if((mouseX>=1231 && mouseX<=1303) && (mouseY>=632 && mouseY<=649)){
        menu=0;    
      }
    }*/
  }
  if(menu==3){
    //ZERAR O JOGO
    image(menu3, 0, 0, windowWidth, windowHeight);    
    image(kakashi, xKakashi, yKakashi, 220, 220);

    textSize(40);
    textSize(BOLD);
    fill(230);
    stroke(0);
    strokeWeight(3);
    text('Pontuação: ', 101, 180);
    textStyle(NORMAL);
    textSize(30);
    text('Nivel 1: ' + score[0], 101, 230);
    text('Nivel 2: ' + score[1], 101, 270);
    text('Nivel 3: ' + score[2], 101, 310);
    text('Nivel 4: ' + score[3], 101, 350);
    text('Nivel 5: ' + score[4], 101, 390);
    text('Total: ' + pontuacao, 101, 430);
    textStyle(BOLD);
    fill(0);
    stroke(150);
    strokeWeight(1);
    text('Bom trabalho!', 1120, 439);
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
    xJogador += velocidadeSasuke;
  }
  
  //Fazer jogador mover para trás
  if (keyIsDown(LEFT_ARROW)){
   xJogador -= velocidadeSasuke;
  }
  
  //Fazer jogador mover para cima 
  if (keyIsDown(UP_ARROW)){
    yJogador -= velocidadeSasuke;
  }
  
  //Fazer jogador mover para baixo
  if (keyIsDown(DOWN_ARROW)){
    yJogador += velocidadeSasuke;     
  }
  
  //Estabelecendo limites da tela
  if (xJogador>width-110) {
    xJogador -= velocidadeSasuke;
  } else if (xJogador<20) {
    xJogador+=velocidadeSasuke;
  } 
  if (yJogador>height-120) {
    yJogador-=velocidadeSasuke;
  } else if (yJogador<20) {
    yJogador+=velocidadeSasuke;
  }

  if(municao>0){
    if(keyIsDown(32) && xTiro>=width){
      tiro=true;
      xTiro=xJogador;
      yTiro=yJogador;
    }
  }

  if(tiro==true){
    xTiro+=12;
  }

  if(xTiro>=width){
    tiro=false;    
  }

  if(menu==1){
    if (nivel==1){
      //image(nivel1, 0, 0, windowWidth, windowHeight);
      if(pontos==300){
        nivel+=1;
        score[0]=pontos;
        pontuacao+=pontos;      
        pontos=0;
        velocidade+=2;
        municao=10;
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
        municao=18;
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
        velocidadeSasuke+=1;
        municao=25;
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
        velocidadeSasuke+=2;
        municao=38;
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
        velocidadeSasuke+=3;
        municao=53;
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
    if ((xObstaculo[i]<=xJogador+100 && xObstaculo[i]+70>=xJogador) && (yObstaculo[i]-50<=yJogador+50 && yObstaculo[i]+50>=yJogador-50)){
      noLoop();        
      if(vidas>0){
        vidas-=1;
        pontos=0;
      }
      setTimeout(reiniciar, 1000);
    }
    if(vidas==0){
      setTimeout(game_over,1000);
    }
  }

  //Colisão TIRO-OBSTÁCULO
  for (var i=0; i<5; i++){
    if(tiro==true){
      if(xTiro>xObstaculo[i]-50 && (yTiro>=yObstaculo[i]-50 && yTiro<=yObstaculo[i]+50)){
        pontos+=20;
        xTiro=1400;        
        image(clone, xObstaculo[i], yObstaculo[i], 120, 120);
        xObstaculo[i]=random(windowWidth, windowWidth+1000);
        if(municao>0){
          municao-=1;
        }
      }
    }
  }
}

function reiniciar(){
  for(var i=0; i<5; i++){
    yObstaculo[i]=random(50, windowHeight-70);
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
    if((mouseX>=240 && mouseX<=485) && (mouseY>=94 && mouseY<=126)){
      menu=1;
    }
  }   
}

function game_over(){
  menu=2;
}