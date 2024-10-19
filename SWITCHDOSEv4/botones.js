function mostrarBotonVolver() {
 
  fill(0, 0, 0, 128);
  stroke(255);
  strokeWeight(1);
  rect(245, 400, 150, 40, 10);
 
  noStroke();
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(12);
  text("Volver al Inicio", 320, 420);
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
