//URL YouTube: https://youtu.be/z82lLjUNVk8?si=yFx3pSN8bbJmiNXV
//Legajo: 119039/8


PImage obraRect;
int rectTamaño = 200; 
int coordenadaX = 500;
int coordenadaY = 100;
int invertirColor = 0;

void setup() {
  size(800, 400);
  background(255);
  obraRect = loadImage("obraRect.jpg");
  image(obraRect, 0, 0, 400, 400);
}

void draw() {
  for (int j = 0; j < 4; j++) {
    if (j == 1) {
      coordenadaX = 700;
    } else if (j == 2) {
      coordenadaY = 300;
    } else if (j == 3) {
      coordenadaX = 700;
      coordenadaY = 300;
    }
    for (int i = 0; i < 10; i++) {
      int tam = rectTamaño - (i * cambioGrosor());
      
      if (i % 2 == 0) {
        if (invertirColor == 1) {
          fill(255);  
        } else {
          fill(0);
        }
      } else {
        if (invertirColor == 1) {
          fill(0);   
        } else {
          fill(255);
        }
      }

      float moverX, moverY;
      if (j == 0 || j == 1) {
        moverX = map(mouseX, 0, width, 5, 5);
      } else {
        moverX = map(mouseX, 0, width, -5, -5);
      } 
      if (j == 0 || j == 2) {
        moverY = map(mouseY, 0, height, -5, 5);
      } else {
        moverY = map(mouseY, 0, height, 5, -5);
      }

      float posX = coordenadaX + i * moverX;
      float posY = coordenadaY + i * moverY;
      rectMode(CENTER);  
      rect(posX, posY, tam, tam);
    }    
    coordenadaX = 500;
    coordenadaY = 100;
  }
}

void mousePressed() {
  clickInvertir(true);  
}

void clickInvertir(boolean invertir) { 
  if (invertir) {
    invertirColor = 1 - invertirColor;
  }
}

int cambioGrosor() {
  float movimientoX = mouseX - width / 2;
  float movimientoY = mouseY - height / 2; 
  float deslizar;
  
  if (movimientoX >= 0 && movimientoY >= 0) {
    if (movimientoX >= movimientoY) {
      deslizar = movimientoX;
    } else {
      deslizar = movimientoY;
    }
  } else if (movimientoX < 0 && movimientoY < 0) {
    if (movimientoX <= movimientoY) {
      deslizar = -movimientoX;
    } else {
      deslizar = -movimientoY;
    }
  } else {
    if (movimientoX >= 0) {
      deslizar = movimientoX;
    } else {
      deslizar = movimientoY;
    }
  }
  
  float distancia;
  if (width > height) {
    distancia = width / 2;
  } else {
    distancia = height / 2;
  }
  
  float numeroCambiado = 10 + (deslizar / distancia) * 20;
  return int(numeroCambiado);
}

void keyPressed() {
  if (key == 'r' || key == 'R') {
    reiniciarColor();
  } else if (key == 'm' || key == 'M') {
    reiniciarMouse();
  }
}

void reiniciarColor() {
  invertirColor = 0;  
}

void reiniciarMouse() {
  mouseX = width / 4;
  mouseY = height / 4;
}
