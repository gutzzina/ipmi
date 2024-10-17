let camino = 'intro', imagIntro = [], imagActual = 0, imagSokka = [], imagAang = [], imagAangBifu = []; //nuevo array para la carpeta de la bifurcación de aang
let flecha, mostrarFlecha = false; //control de visibilidad de la flecha
let pantallaCreditos = false; //control de pantalla de créditos

function preload() {
  flecha = loadImage('data/flechaBlanca.png');
  imagIntro = [
    loadImage('data/intro/avatarIntro.jpeg'),
    loadImage('data/intro/foto1.jpeg'),
    loadImage('data/intro/foto2.jpeg'),
    loadImage('data/intro/foto3.jpg'),
    loadImage('data/separados1.jpeg')
  ];

  imagSokka = [
    loadImage('data/Sokka/cs3.jpeg'),
    loadImage('data/Sokka/cs4.jpeg'),
    loadImage('data/Sokka/cs5.jpg'),
    loadImage('data/Sokka/cs6.jpg'),
    loadImage('data/Sokka/cs7.jpg'),
    loadImage('data/Sokka/cs8.jpg'),
    loadImage('data/Sokka/cs9.jpg'),
    loadImage('data/Sokka/cs10.jpg'),
    loadImage('data/Sokka/cs11.jpg')
  ];

  imagAang = [
    loadImage('data/aang(1)/aang2.jpg'),
    loadImage('data/aang(1)/aang3.jpg'),
    loadImage('data/aang(1)/aang4.jpg'),
    loadImage('data/aang(1)/aang5.jpg'),
    loadImage('data/aang(1)/aang6.jpg'),
    loadImage('data/aang(1)/aang7.jpg'),
    loadImage('data/aang(1)/aang8.jpg')
  ];

  imagAangBifu = [ //bifurcación en la decisión de (¿Aang y Katara se besan?)
    loadImage('data/aangBifu/aangBifu1.jpeg'),
    loadImage('data/aangBifu/aangBifu2.jpeg'),
    loadImage('data/aangBifu/aangBifu3.jpeg'),
    loadImage('data/aangBifu/aangBifu4.jpeg'), 
    loadImage('data/aangBifu/aangBifu5.jpeg'),    
    loadImage('data/aangBifu/aangBifu6.jpeg'), 
    loadImage('data/aangBifu/aangBifu7.jpeg'),  
    loadImage('data/aangBifu/aangBifu8.jpeg'),
    loadImage('data/aangBifu/aangBifu9.jpeg'),  
  ];
}

function setup() {
  createCanvas(640, 480);
}

function draw() {
  if (pantallaCreditos) {
    background(0); //pantalla en negro
    fill(255); //color del texto
    textAlign(CENTER, CENTER);
    textSize(32); //tamaño de texto de créditos
    text("Créditos", width / 2, height / 2 - 20);
    textSize(12);//tamaño de texto de nombres
    text("Desarrollado por Gavilan Fiorella y Erbes Yamile", width / 2, height / 2 + 20);
    
    //botón "volver a Carátula"
    fill(0, 0, 0, 128);
    stroke(255);
    strokeWeight(1);
    rect(width / 2 - 75, height / 2 + 50, 150, 35, 10); //botón
    noStroke();
    fill(255);
    textAlign(CENTER, CENTER);
    text("Volver a Carátula", width / 2, height / 2 + 68);
    return; //salir para no dibujar nada más
  }

  background(0);

  //mostrar la imagen actual
  let imagen = tomaImagenActual();
  if (imagen) {
    image(imagen, 0, 0, width, height);
  }

 //sólo se va a mostrar el marco cuando no estemos en las pantallas de decisiones
if (mostrarFlecha && !(camino === 'intro' && imagActual === imagIntro.length - 1) && !(camino === 'aang' && imagActual === 5)) {
  mostrarMarcoFlecha();
}


  //mostrar botones solo en la primera y última imagen de la intro
  if (camino === 'intro' && imagActual === 0) {
    botonesIntro();
  } else if (camino === 'intro' && imagActual === imagIntro.length - 1) {
    botonesDecision();
  }

  //mostrar texto y botones en Aang 7
  if (camino === 'aang' && imagActual === 5) {
    mostrarTextoDecision();
  }
}

function tomaImagenActual() {
  return imagDelCamActual()[imagActual];
}

function imagDelCamActual() {
  return camino === 'aang' ? imagAang : camino === 'sokka' ? imagSokka : imagIntro;
}

function mostrarMarcoFlecha() { //marco para diálogos
  fill(0, 0, 0, 128);
  noStroke();
  rect(70, 360, 500, 100, 20); //marco interno
  stroke(255);
  strokeWeight(1);
  noFill();
  rect(70, 360, 500, 100, 20); //marco externo
  image(flecha, 530, 425, 30, 20); //flecha guia
}

function botonesIntro() {
  fill(0, 0, 0, 128);
  stroke(255);
  strokeWeight(1);
  rect(255, 352, 130, 35, 10); //dibujo de botón "iniciar aventura"
  noStroke();
  fill(255);
  textAlign(CENTER, CENTER);
  text("Iniciar Aventura", 320, 370);
  
  fill(0, 0, 0, 128);
  stroke(255);
  strokeWeight(1);
  rect(255, 400, 130, 35, 10); //dibujo de botón "créditos"
  noStroke();
  fill(255);
  textAlign(CENTER, CENTER);
  text("Créditos", 320, 420);
}

function botonesDecision() {
  fill(0, 0, 0, 128);
  stroke(255);
  strokeWeight(1);
  rect(100, 400, 150, 40, 10);  //botón Aang
  rect(350, 400, 150, 40, 10);  //botón Sokka

  noStroke();
  fill(255);
  textAlign(CENTER, CENTER);
  text("Seguir a Aang", 175, 420);
  text("Seguir a Sokka", 425, 420);
}

function mostrarTextoDecision() { //texto pregunta de decisión // bifurcación
  noStroke();
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(12);
  text("¿Aang y Katara se besan?", width / 2, height / 2 - 20);
  
  //botón "no"
  fill(0, 0, 0, 128);
  stroke(255);
  strokeWeight(1);
  rect(170, height / 2 + 20, 100, 30, 10); 
  noStroke();
  fill(255);
  textAlign(CENTER, CENTER);
  text("No", 220, height / 2 + 35);
  
  // Botón "si"
  fill(0, 0, 0, 128);
  stroke(255);
  strokeWeight(1);
  rect(370, height / 2 + 20, 100, 30, 10); 
  noStroke();
  fill(255);
  textAlign(CENTER, CENTER);
  text("Sí", 420, height / 2 + 35);
}

function mousePressed() {
  //pantalla de créditos
  if (pantallaCreditos) {
    //detección de clic en el botón "volver a carátula"
    if (mouseX > width / 2 - 75 && mouseX < width / 2 + 75 && mouseY > height / 2 + 50 && mouseY < height / 2 + 85) {
      pantallaCreditos = false; //sale de la pantalla de créditos
      camino = 'intro'; //volver a la carátula o pantalla inicial
      imagActual = 0; //vuelve a la primera imagen de la intro si se da click en el botón
      mostrarFlecha = false; //no muestra la flecha/marco al estar en la pantalla de créditos
      return; //terminar función
    }
  }

  //pantalla de decisiones
  if (camino === 'intro' && imagActual === imagIntro.length - 1) {
    if (mouseX > 100 && mouseX < 250 && mouseY > 400 && mouseY < 440) {
      camino = 'aang';
      imagActual = 0;
      mostrarFlecha = true;
    } else if (mouseX > 350 && mouseX < 500 && mouseY > 400 && mouseY < 440) {
      camino = 'sokka';
      imagActual = 0;
      mostrarFlecha = true;
    }
    return; //salir tras la selección
  }

  //botones de la intro
  if (camino === 'intro' && imagActual === 0) {
    //detección de clic solo en el área del botón "Iniciar aventura"
    if (mouseX > 255 && mouseX < 385 && mouseY > 352 && mouseY < 387) {
      imagActual = 1; // Avanzar en la intro
      mostrarFlecha = true; // Mostrar flecha
    }

    //detección de clic en el botón "créditos"
    if (mouseX > 255 && mouseX < 385 && mouseY > 400 && mouseY < 435) {
      pantallaCreditos = true; // Cambiar a pantalla de créditos
    }
  }

  //cambiar imagen al hacer clic en la flecha
  if (mostrarFlecha && mouseX > 530 && mouseX < 560 && mouseY > 425 && mouseY < 445) {
    imagActual = (imagActual + 1) % imagDelCamActual().length; // Avanzar imagen
  }

  //decisiones en Aang 7
  if (camino === 'aang' && imagActual === 5) {
    if (mouseX > 170 && mouseX < 270 && mouseY > height / 2 + 20 && mouseY < height / 2 + 50) {
      // Sí
      imagActual = 0; //reiniciar Aang
      imagAang = imagAangBifu; //cambiar a nuevo array
      mostrarFlecha = true; //mostrar flecha
    } else if (mouseX > 370 && mouseX < 470 && mouseY > height / 2 + 20 && mouseY < height / 2 + 50) {
      // No
      imagActual = 6; //ir a la imagen Aang 8
      mostrarFlecha = true; //mostrar flecha
    }
  }
}
