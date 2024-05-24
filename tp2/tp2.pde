//Legajo: 119039/8

//Nombre: Gavilan Fiorella Rocio

//DNI: 44611814

//Juego: Metro (saga)

int estado;
int py;
int pyDos;
int velocidadY = 2;

String frase = "“Incluso en los tiempos más oscuros, no deberíamos renunciar a las cosas que nos hacen humanos”.\n ";
String autor = "—Dmitry Glukhovsky";
String autorDos ="Dmitry Glukhovsky";
String informacion = "La saga de videojuegos “Metro” está basada en la trilogía de libros del autor ruso Dmitry Glukhovsky. Los libros se llaman “Metro 2033”, “Metro 2034” y “Metro 2035”. La trilogía comenzó a publicarse en 2005 con “Metro 2033”.";
String infoLibros = "La historia se centra en un mundo post-apocalíptico donde la humanidad se refugia en el metro de Moscú después de una guerra nuclear que ha dejado la superficie inhabitable debido a la radiación y las criaturas mutantes. La lucha por la supervivencia, los conflictos entre facciones y la exploración de los túneles del metro forman la base de la trama.";
String infoJuegos = "La saga de videojuegos “Metro” sigue la premisa establecida por la trilogía. Fue diseñado por la empresa “4A Games”. Los libros y los juegos exploran las vidas de los supervivientes que habitan en este mundo subterráneo, enfrentándose a la radiación, criaturas mutantes y conflictos entre facciones.";
String compañerosJuegos = "Los protagonistas de la historia a menudo se embarcan en misiones peligrosas a través de los túneles del metro y las estaciones, buscando recursos, enfrentándose a enemigos y tratando de descubrir los secretos de este nuevo mundo. La atmósfera de los juegos y los libros es oscura, opresiva y llena de suspense, con un enfoque en la supervivencia y la lucha por la humanidad en un entorno extremadamente hostil.";
String metroUno = "Metro 2033 (2010)";
String metroDos = "Metro Last Light (2013)";
String metroTres = "Metro Exodus (2019) ";
String protagonistaMetro = "El protagonista principal de la saga es Artyom, un joven habitante del metro de Moscú, su lugar de nacimiento; Vystavochnaya, que se ve envuelto en una serie de eventos que lo llevan a enfrentarse a diversos peligros y desafíos en el mundo post-apocalíptico.";
String textoCriaturaUno = "Artyom se convierte en un símbolo de esperanza para su comunidad mientras lucha por la supervivencia. Su viaje personal implica descubrir la verdad detrás del desastre nuclear y encontrar una forma de garantizar el futuro de la humanidad, aunque en el transcurso se enfrenta constantemente a criaturas mutantes, peligros ambientales y amenazas humanas.";
String textoCriaturaDos = "Las criaturas son extremadamente peligrosas y representan una de las mayores amenazas para los supervivientes que habitan en el metro de Moscú. Estas criaturas son el resultado de la radiación y la contaminación ambiental causadas por la guerra nuclear. Varios tipos de mutantes y monstruos de diferentes tamaños y formas acechan en los túneles oscuros y en las estaciones abandonadas.";
String textoArmas = "Artyom, al igual que sus compañeros, utilizan una variedad de armas a lo largo de sus aventuras para enfrentarse a las amenazas del mundo post-apocalíptico en el que viven. Éstas armas pueden ser algunos fusiles de asaltos como el Kalash y sus variantes el Kalash 2012, Kalash 2012M, entre otros. Rifles de Francotirador. En situaciones donde se necesita alcance y precisióncomo el VSV. Pistolas como el Revólver Bastard y el Tihar, una pistola de aire comprimido que dispara balas caseras. Escopetas para el combate a corta distancia como la Duplet, entre otras más.";
String textoFinal = "La saga Metro, tanto en forma de libros como de videojuegos, es altamente recomendada por su excelencia en la narrativa, la ambientación inmersiva y la profundidad de los personajes. \nTanto los libros de Dmitry Glukhovsky como los juegos de la serie Metro ofrecen una experiencia única que atrapa a los lectores y jugadores en un mundo post-apocalíptico lleno de peligros, misterios y emociones. Con una combinación de acción intensa, momentos de suspense y exploración atmosférica, la saga Metro cautiva a aquellos que buscan una historia emocionante y emocionalmente resonante. Los personajes complejos y realistas, junto con la inmersiva ambientación del metro de Moscú, hacen que tanto los libros como los juegos sean una experiencia inolvidable para aquellos que se sumergen en este mundo oscuro y fascinante. Además, ofrece reflexiones profundas sobre temas universales como la supervivencia, la moralidad, la esperanza y la naturaleza humana en situaciones extremas. A través de sus historias cautivadoras y sus personajes memorables, la saga deja una impresión duradera en quienes la experimentan, convirtiéndose en un clásico moderno del género post-apocalíptico.";

int estadoIniciarTiempo = 0;
float x, y;
int alpha = 0;
int alphaSeis = 0;
int alphaOnce = 0;
int alphaQuince = 0;
int alphaTextos = 255;
int alphaPortada = 0;
PImage portadaSaga, autorLibros, trilogiaLibros, librosJuegos, portadaJuegos, protagonistasJuegos, escenarioUno, escenarioDos, escenarioTres, personajePrincipal, criaturaUno, criaturaDos, metroArmas, botonSiguienteUno, botonAtrasUno, metroFinal, botonReinicio;

int centroX = 594;
int centroY = 437;
int radio = 40;
float distanciaMouseBoton;
boolean mostrarBoton = false;
int tiempoEspera = 65;
int transparencia = 150;
int botonX = 50;
int botonY = 437;
int botonRadio = 40;

void setup() {
  size(640, 480);
  background(0);
  estadoIniciarTiempo = frameCount;
  println(frameCount);
  portadaSaga = loadImage("portadaSaga.png");
  autorLibros = loadImage("autorLibros.png");
  trilogiaLibros = loadImage("trilogiaLibros.png");
  librosJuegos = loadImage("librosJuegos.png");
  portadaJuegos = loadImage("portadaJuegos.png");
  protagonistasJuegos = loadImage("protagonistasJuegos.png");
  escenarioUno = loadImage("escenarioUno.png");
  escenarioDos = loadImage("escenarioDos.png");
  escenarioTres = loadImage("escenarioTres.png");
  personajePrincipal = loadImage("personajePrincipal.png");
  criaturaUno = loadImage("criaturaUno.png");
  criaturaDos = loadImage("criaturaDos.png");
  metroArmas = loadImage("metroArmas.png");
  botonSiguienteUno = loadImage("botonSiguienteUno.png");
  botonAtrasUno = loadImage("botonAtrasUno.png");
  metroFinal = loadImage("metroFinal.png");
  botonReinicio = loadImage("botonReinicio.png");
  pyDos = -400;
  py = height;
  estado = 1;
}

void mousePressed() {
  println(" X  Y");
  println(mouseX + "," + mouseY); 

  if (mostrarBoton && dist(mouseX, mouseY, centroX, centroY) < radio) {
    println("Cambio de Diapositiva");
    estado++;
  }  
  if (mostrarBoton && dist(mouseX, mouseY, botonX, botonY) < botonRadio && estado > 2) {
    println("Regresar Diapositiva");
    estado--;
  }
  if (estado == 15 && dist(mouseX, mouseY, width/2, height-30) < 40) {
    println("Reiniciar");
    reiniciar();
  }
}
void reiniciar() {
  estado = 1;
  alphaPortada = 0;
  tiempoEspera = 65;
  mostrarBoton = false;
  alphaTextos = 255;
}

void draw() {
   if ((frameCount - estadoIniciarTiempo) >= 10 * 60 && estado < 15) { 
    estado++;
    estadoIniciarTiempo = frameCount;
}
  if (alphaTextos > 0) {
    alphaTextos -= 1;
  }
  if (estado == 2 || estado == 3) {
    if (alphaPortada < 255) {
      alphaPortada += 1;
    } else {
      if (tiempoEspera > 0) {
        tiempoEspera -= 1;
      } else {
        mostrarBoton = true; 
      }
    }
  }

  background(0);
  textSize(15);
  fill(255, alphaTextos);
  textAlign(CENTER, CENTER);
  text(frase, width/2, height/2);
  textAlign(LEFT, CENTER);
  text(autor, 0, 250);

  if ((estado == 2 || estado == 3 || estado == 4 || estado == 5 || estado == 6 || estado == 7 || estado == 8 || estado == 9 || estado == 10 || estado == 11 || estado == 12 || estado == 13 || estado == 14 || estado == 15 && alphaPortada > 0)) {
    tint(255, alphaPortada);
    if (estado == 2) {
      image(portadaSaga, 0, 0, 640, 480); 
    } else {
      image(autorLibros, 0, 0, 640, 480); 
      fill(255);
      text(informacion, 10, py, 250, 300); 
      if (py>100) {
        py --;
      }
      textSize(25);
      text(autorDos, 10, 160); 
      noFill();
      stroke(255, 200, 0);
      line(10, 180, 180, 180);
    }
    if (estado == 4) {
      image(trilogiaLibros, 0, 0, 640, 480);
      textSize(15);
      textAlign(CENTER);
      fill(255, 255, 255, alpha);
      if (alpha < 255) {
       alpha += 1;
      }
      text(infoLibros, 60, 90, 500, 500);
      noFill();
      stroke(255, 200, 0);
      line(138, 61, 492, 61);
      line(138, 197, 510, 197);
    }
    if (estado == 5) {
      image(librosJuegos, 0, 0, 640, 480);
    }
    if (estado == 6) {
      image(portadaJuegos, 0, 0, 640, 480);
      textSize(15);
      textAlign(LEFT);
      fill(255, 255, 255, alphaSeis);
      if (alphaSeis < 255) {
       alphaSeis += 1;
      }
      text(infoJuegos, 10, 30, 400, 300);
    }
    if (estado == 7) {
      image(protagonistasJuegos, 0, 0, 640, 480);
      textSize(15);
      textAlign(CENTER);
      text(compañerosJuegos, 60, pyDos, 500, 500);
      if (pyDos<22) {
       pyDos += velocidadY;
        } else {
         velocidadY = 2;
      }
      noFill();
      stroke(255, 200, 0);
      line(257, 151, 347, 151);
    }
    if (estado == 8) {
      image(escenarioUno, 0, 0, 640, 480);
      fill(255, 200, 0);
      textSize(15);
      text(metroUno, 10, 400, 150, 100);
    }
    if (estado == 9) {
      image(escenarioDos, 0, 0, 640, 480);
      fill(255, 200, 0);
      textSize(15);
      text(metroDos, 10, 400, 150, 100);
    }
    if (estado == 10) {
      image(escenarioTres, 0, 0, 640, 480);
      fill(255, 200, 0);
      textSize(15);
      text(metroTres, 10, 400, 150, 100);
    }
    if (estado == 11) {
      image(personajePrincipal, 0, 0, 640, 480);
      textSize(15);
      textAlign(CENTER);
      fill(255, 255, 255, alphaOnce);
      if (alphaOnce < 255) {
       alphaOnce += 1;
      }
      text(protagonistaMetro, 287, 60, 340, 500);
      noFill();
      stroke(255, 200, 0);
      line(336, 160, 572, 160);
      line(321, 32, 572, 32);
    }
    if (estado == 12) {
      image(criaturaUno, 0, 0, 640, 480);
      textSize(15);
      text(textoCriaturaUno, 10, 10, 255, height);
    }
    if (estado == 13) {
      image(criaturaDos, 0, 0, 635, 480);
      textSize(15);
      text(textoCriaturaDos, 370, 10, 255, height);
    }
    if (estado == 14) {
      image(metroArmas, 0, 0, 640, 480);
      textAlign(CENTER, TOP);
      textSize(15);
      text(textoArmas, 100, 10, 450, 450);
    }
    if (estado == 15) {
      image(metroFinal, 0, 0, 640, 480);
      textAlign(CENTER);
      textSize(15);
      fill(255, 255, 255, alphaQuince);
      if (alphaQuince < 255) {
       alphaQuince += 1;
      }
      text(textoFinal, 115, 40, 400, 400);
      mostrarBoton = false; 
      tint(255, transparencia);
      image(botonReinicio, 315, 420, 50, 50);
    }
  }     
  if (mostrarBoton) {
    noStroke();
    fill(255, 255, 255, 0);
    circle(centroX, centroY, radio);
    distanciaMouseBoton = dist(mouseX, mouseY, centroX, centroY);
    tint(255, transparencia);
    image(botonSiguienteUno, 580, 420, 30, 30);  
  } 
  if (mostrarBoton && estado > 2) {
    fill(255, 255, 255, 0);
    circle(botonX, botonY, botonRadio);
    tint(255, transparencia);
    image(botonAtrasUno, 33, 420, 30, 30);
  }
  if (alphaTextos == 0 && estado == 1) {
    estado = 2; 
  }
}
