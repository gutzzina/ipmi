let imagenX = 320, imagenY = 240, sonidoAr, imagenes = [], imagenesSokka = [], imagenesAang = [], imagActual = 0;

function preload() {
  soundFormats('mp3');
  sonidoAr = loadSound('data/sound.mp3'); 
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
  image(imagenes[imagActual], 0, 0, 640, 480); 
}
function mouseReleased() {
  if (!sonidoAr.isPlaying()) sonidoAr.play();
}
function mousePressed() {
  const clickeo = 40; 
  if (imagActual === 6) {
    if (mouseX < width / 2 && mouseY > height / 2) cambiarImagenes(imagenesSokka);
    else if (mouseX > width / 2 && mouseY < height / 2) cambiarImagenes(imagenesAang);
  } else {
    if (mouseX > imagenX - clickeo && mouseX < imagenX + clickeo && 
        mouseY > imagenY - clickeo && mouseY < imagenY + clickeo) {
      imagActual = (imagActual + 1) % imagenes.length; 
    }
  }
}
function cambiarImagenes(nuevasImagenes) {
  imagActual = 0; 
  imagenes = nuevasImagenes; 
}
