let imagenX = 640 / 2, imagenY = 480 / 2, sonidoAr, imagenes = [], imagActual = 0, clickeoT = true; 

function preload() {
  soundFormats('mp3');
  sonidoAr = loadSound('data/sound.mp3'); 
}
function setup() {
  createCanvas(640, 480);
  let imagenesNom = ['data/avatarIntro.jpeg', 'data/imagUno.jpeg', 'data/imagDos.jpeg', 'data/imagTres.jpeg'];
  for (let i = 0; i < imagenesNom.length; i++) { 
    imagenes[i] = loadImage(imagenesNom[i]);
  }
}
function draw() {
  image(imagenes[imagActual], 0, 0, 640, 480); 
}
function keyPressed() {
}
function mouseReleased() {
  if (!sonidoAr.isPlaying()) {
    sonidoAr.play();
  }
}
function mousePressed() {
  let clickeo = 50; 
  if (clickeoT && 
      mouseX > imagenX - clickeo && mouseX < imagenX + clickeo && 
      mouseY > imagenY - clickeo && mouseY < imagenY + clickeo) {
    imagActual = (imagActual + 1) % imagenes.length; 
    if (imagActual === 1) {
      clickeoT = false; 
    }
  }
}
