let guionIntro = [], imagenesIntro = [], imagActual = 0, imagenesAangUno = [], imagenesBeso = [], imagenesAangBiful = [], imagenesSokka = [], flecha, decision = false, pantallaFinal = false;

function preload() {
  guionIntro = [ 
     loadStrings('/data/intro.txt'), //textos de intros
     loadStrings('/data/aangUno.txt'), //textos de aang
     loadStrings('/data/sokkaTexto.txt'), //textos de sokka
     loadStrings('/data/aangBifuTexto.txt'), //textos de bifurcación aang
     ];
  
  flecha = loadImage("data/flechaBlanca.png");
  imagenFinal = loadImage("data/imagenFinal.jpeg");

  imagenesIntro = [
    loadImage("data/avatarIntro.jpeg"),
    loadImage("data/Uno.jpeg"),
    loadImage("data/Dos.jpeg"),
    loadImage("data/Tres.jpeg"),
    loadImage("data/separados1.jpeg"),
  ];
  // separacion aang y katara
  imagenesAangUno = [
    loadImage("data/aang(1)/aang2.jpg"),
    loadImage("data/aang(1)/aang3.jpg"),
    loadImage("data/aang(1)/aang4.jpg"),
    loadImage("data/aang(1)/aang5.jpg"),
    loadImage("data/aang(1)/aang6.jpg"),
    loadImage("data/aang(1)/aang7.jpg"),
  ];
  //beso
  imagenesBeso = [
  loadImage("data/aang(1)/aang8.jpg"),
  loadImage("data/imagenFinal.jpeg"),
  ];
  
  //final alternativo
  imagenesAangBiful = [
    loadImage("data/aangBifu/aangBifu1.jpeg"),
    loadImage("data/aangBifu/aangBifu2.jpeg"),
    loadImage("data/aangBifu/aangBifu3.jpeg"),
    loadImage("data/aangBifu/aangBifu4.jpeg"),
    loadImage("data/aangBifu/aangBifu5.jpeg"),
    loadImage("data/aangBifu/aangBifu6.jpeg"),
    loadImage("data/aangBifu/aangBifu7.jpeg"),
    loadImage("data/aangBifu/aangBifu8.jpeg"),
    loadImage("data/aangBifu/aangBifu9.jpeg"),
    loadImage("data/imagenFinal.jpeg"),
  ];
  //sokka
  imagenesSokka = [
    loadImage("data/Sokka/cs3.jpeg"),
    loadImage("data/Sokka/cs4.jpeg"),
    loadImage("data/Sokka/cs5.jpg"),
    loadImage("data/Sokka/cs6.jpg"),
    loadImage("data/Sokka/cs7.jpg"),
    loadImage("data/Sokka/cs8.jpg"),
    loadImage("data/Sokka/cs9.jpg"),
    loadImage("data/Sokka/cs10.jpg"),
    loadImage("data/Sokka/cs11.jpg"),
    loadImage("data/imagenFinal.jpeg"),
  ];
}

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(0);
  
 if (pantallaFinal) {
    mostrarPantallaCreditos(); //llama a la función para mostrar créditos
  } else {
    if (imagActual < 5) {
      image(imagenesIntro[imagActual], 0, 0, 640, 480);
      opcionesIntro(imagActual);
    } else if (imagActual >= 5 && imagActual < 11) {
      image(imagenesAangUno[imagActual - 5], 0, 0, 640, 480);
      opcionAang(imagActual);
    } else if (imagActual >= 11 && imagActual <= 20) {
      image(imagenesAangBiful[imagActual - 11], 0, 0, 640, 480);
      opcionAangBifu(imagActual);
    } else if (imagActual >= 21 && imagActual <= 30) {
      image(imagenesSokka[imagActual - 21], 0, 0, 640, 480);
      opcionSokka(imagActual);
    } else if (imagActual >= 31) {
      image(imagenesBeso[imagActual - 31], 0, 0, 640, 480);
      opcionBeso(imagActual); 
    }
  }
}


// botones que aparecen al comienzo de las diapositivas
function botonesIntro() {
  fill(0, 0, 0, 128);
  stroke(255);
  strokeWeight(1);
  rect(255, 352, 130, 35, 10);
  noStroke();
  textSize(12);
  fill(255);
  textAlign(CENTER, CENTER);
  text("Iniciar Aventura", 320, 370);

  fill(0, 0, 0, 128);
  stroke(255);
  strokeWeight(1);
  rect(255, 400, 130, 35, 10);
  noStroke();
  fill(255);
  textAlign(CENTER, CENTER);
  text("Créditos", 320, 420);
}

function mostrarBotonVolver() {
  // Dibujar el botón
  fill(0, 0, 0, 128);
  stroke(255);
  strokeWeight(1);
  rect(245, 400, 150, 40, 10);

  // Agregar el texto del botón
  noStroke();
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(12);
  text("Volver al Inicio", 320, 420);
}

function mostrarPantallaCreditos() {
    
  if (!pantallaFinal) return; // Solo mostrar créditos si no es un final
  
  background(0);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(32);
  text("Créditos", width / 2, height / 2 - 20);
  textSize(12);
  text(
    "Desarrollado por Gavilan Fiorella y Erbes Yamile",
    width / 2,
    height / 2 + 20
  );

  mostrarBotonVolver(); // Asegúrate de que esto esté aquí
}

// caja contenedora de textos
function mostrarMarcoFlecha() {
  fill(0, 0, 0, 50);
  noStroke();
  rect(70, 360, 500, 100, 20);
  stroke(255);
  strokeWeight(1);
  noFill();
  rect(70, 360, 500, 100, 20);
  image(flecha, 530, 425, 30, 20);
}

function dialogosTextos(body) {
  fill(255); 
  stroke(0); 
  strokeWeight(1); 
  textSize(12); // 
  let textY = height / 2 + 80; 
  let textWidth = 400; 
  text(body, 110, textY, textWidth, height - 300);
}

//estilos para los textos que aparecen junto a los botones de decision
function dialogoDecision(body) {
  textSize(12); 
  let textY = height / 2 - 50; 
  let textWidth = 600; 
  text(body, 20, textY, textWidth, height - 300);
}

function botonesDecision() {
  text("¡Ups! Al entrar a la cueva, un derrumbe que separó los grupos.", 300, 170);
  fill(0, 0, 0, 128);
  stroke(255);
  strokeWeight(1);
  rect(100, 400, 150, 40, 10);
  rect(350, 400, 150, 40, 10);

  noStroke();
  fill(255);
  textAlign(CENTER, CENTER);
  text("Seguir a Aang", 175, 420);
  text("Seguir a Sokka", 425, 420);
}

function botonesDecisionBeso() {
  fill(0, 0, 0, 128);
  stroke(255);
  strokeWeight(1);
  rect(100, 400, 150, 40, 10);
  rect(350, 400, 150, 40, 10);

  noStroke();
  fill(255);
  textAlign(CENTER, CENTER);
  text("No", 175, 420);
  text("Beso", 425, 420);
}

function opcionBeso(imagActual) {
  decision = false;
  switch (imagActual) {
    case 31: 
      dialogosTextos(guionIntro[1][5]);
      mostrarMarcoFlecha();
      break;
    case 32:
      mostrarBotonVolver();
      pantallaFinal=true;
      break;
  }
}

function mousePressed() {
  //pantalla final
   if (pantallaFinal) {
    if (mouseX > 245 && mouseX < 395 && mouseY > 400 && mouseY < 440) {
      imagActual = 0;
      pantallaFinal = false; 
      console.log("Regresando al inicio...");
    }
    return; 
  }

  //manejo de decisiones
  if ([4, 10, 20, 30].includes(imagActual)) {
    if (mouseX > 100 && mouseX < 250 && mouseY > 400 && mouseY < 440) {
      imagActual = imagActual < 10 ? 5 : (imagActual < 20 ? 11 : 21); //Opción Aang
      console.log("Opción Aang seleccionada, imagActual:", imagActual);
    } else if (mouseX > 350 && mouseX < 500 && mouseY > 400 && mouseY < 440) {
      imagActual = imagActual < 10 ? 21 : 31; // Opción Sokka
      console.log("Opción Sokka seleccionada, imagActual:", imagActual);
    }
    return; 
  }

  //primera pantalla con botones de "Iniciar Aventura" y "Créditos"
  if (imagActual === 0) {
    if (mouseX > 255 && mouseX < 385 && mouseY > 352 && mouseY < 387) {
      imagActual = 1; // Inicia la aventura
      console.log("Iniciando aventura...");
    } else if (mouseX > 255 && mouseX < 385 && mouseY > 400 && mouseY < 435) {
      pantallaFinal = true; // Muestra los créditos
      console.log("Mostrando créditos...");
    }
  } 

  //avanza de imagen al hacer clic en la flecha
  else if (![20, 30, 32].includes(imagActual) && mouseX > 530 && mouseX < 560 && mouseY > 425 && mouseY < 445) {
    imagActual++;
    console.log("Avanzando a la imagen:", imagActual);
  }

  //manejo de la pantalla final de Aang, o historia alternativa
  if (imagActual === 32 || imagActual === 20 || imagActual === 30) {
    if (mouseX > 245 && mouseX < 395 && mouseY > 400 && mouseY < 440) {
      imagActual = 0; 
      console.log("Regresando al inicio desde pantalla final...");
      return; 
    }
  }
}
