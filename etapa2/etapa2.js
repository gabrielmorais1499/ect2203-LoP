//windowWidth: 1326
//windowHeight: 639

var xJogador = 60;
var yJogador = 320;

function setup() {
  createCanvas(windowWidth, windowHeight);    //Cria o tamanho da tela
  background(0);                              //Cor de fundo
  //textSize(16);
    
  //Jogador
  ellipse(xJogador, yJogador, 50, 50);        //Cria um elipse (neste caso, um círculo)
  fill(255, 255, 255);                        //Define a cor branca para a elipse
  
  //Obstáculo
  rect (1200, 290, 50, 50);                   //Cria um retângulo (neste caso, um quadrado)
  fill(255, 255, 255);                        //Define a cor branca para o quadrado
}

function draw() {
 
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
    *Verificar tamanho da tela:
    *text (windowHeight, 50, 50);
    *text(windowWidth, 100, 50);
   */
}
