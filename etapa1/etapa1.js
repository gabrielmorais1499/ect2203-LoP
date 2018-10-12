function setup() {
  createCanvas(windowWidth, windowHeight);    //Cria o tamanho da tela
  background(0);                              //Cor de fundo
}

function draw() {
  
  //Jogador
  ellipse(60, windowHeight/2, 50, 50);        //Cria um elipse (neste caso, um círculo)
  fill(255, 255, 255);                        //Define a cor branca para a elipse
  
  //Obstáculo
  rect (1200, 300, 50, 50);                   //Cria um retângulo (neste caso, um quadrado)
  fill(255, 255, 255);                        //Define a cor branca para o quadrado
}
