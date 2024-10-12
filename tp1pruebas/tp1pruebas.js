let imagenX = 320, imagenY = 240, sonidoAr, imagenes = [], imagenesSokka = [], imagenesAang = [], imagActual = 0, flechaBlanca;
let botonX= 270, botonY = 400, botonAncho = 100, botonAlto = 40; 

function preload() {
  soundFormats('mp3');
  sonidoAr = loadSound('data/sound.mp3'); 
  flechaBlanca = loadImage('data/flechaBlanca.png'); 
  cargaImagen(['data/avatarIntro.jpeg', 'data/Uno.jpeg', 'data/Dos.jpeg', 'data/Tres.jpeg', 'data/Cuatro.jpeg', 'data/Cinco.jpeg', 'data/Seis.jpeg'], imagenes);
  cargaImagen(['data/Sokka/csDos.jpeg', 'data/Sokka/csTres.jpeg', 'data/Sokka/csCuatro.jpeg', 'data/Sokka/csCinco.jpeg', 'data/Sokka/csSeis.jpeg', 'data/Sokka/csSiete.jpeg',
  'data/Sokka/csOcho.jpeg', 'data/Sokka/csNueve.jpeg', 'data/Sokka/csDiez.jpeg', 'data/Sokka/csOnce.jpeg', 'data/Sokka/csDoce.jpeg', 'data/Sokka/csTrece.jpeg'], imagenesSokka);
  cargaImagen(['data/Aang/caDos.jpeg', 'data/Aang/caTres.jpeg', 'data/Aang/caCuatro.jpeg', 'data/Aang/caCinco.jpeg', 'data/Aang/caSeis.jpeg', 'data/Aang/caSiete.jpeg',
  'data/Aang/caOcho.jpeg', 'data/Aang/caNueve.jpeg'], imagenesAang);
}

function cargaImagen(nombres, arreglosImagenes) {
  for (let i = 0; i < nombres.length; i++) {
    arreglosImagenes.push(loadImage(nombres[i]));
  }
}

function setup() {
  createCanvas(640, 480);
}

function draw() {
  //----------------------------------------------------------configuraciones de los botones y tamaños
  image(imagenes[imagActual], 0, 0, 640, 480); 
  if (imagActual === 0) {
    stroke(255), strokeWeight(2), fill(0, 0, 0, 128), rect(botonX, botonY, botonAncho, botonAlto, 10), noStroke(), fill(255);  
    textAlign(CENTER, CENTER), text("Iniciar Aventura", botonX + botonAncho / 2, botonY + botonAlto / 2);
  } else if (imagActual > 0) {
    fill(0, 0, 0, 128), noStroke(), rect(70, 360, 500, 100, 20), stroke(255), strokeWeight(2), noFill(), rect(70, 360, 500, 100, 20);  
    image(flechaBlanca, 530, 425, 30, 20);
  }
}
function mouseReleased() {
  if (!sonidoAr.isPlaying()) sonidoAr.play();
}
function mousePressed() { 
  ////----------------------------------------------------------eventos de mouse / flecha y botón "iniciar aventura"
  if (imagActual > 0) {
    let flechaX = 530, flechaY = 425, flechaAncho = 30, flechaAlto = 20;  
    if (mouseX > flechaX && mouseX < flechaX + flechaAncho &&
        mouseY > flechaY && mouseY < flechaY + flechaAlto) {
      imagActual = (imagActual + 1) % imagenes.length; 
    }
  }
  if (imagActual === 0) {
    if (mouseX > botonX && mouseX < botonX + botonAncho &&
        mouseY > botonY && mouseY < botonY + botonAlto) {
      imagActual = 1; 
    }
  }
}
function cambiarImagenes(nuevasImagenes) {
  imagActual = 0; 
  imagenes = nuevasImagenes; 
}
