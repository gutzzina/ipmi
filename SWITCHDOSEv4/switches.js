function opcionesIntro(imagActual) {
  switch (imagActual) {
    case 0:
      botonesIntro();
      break;
    case 1:
      dialogosTextos(guionIntro[0][0]); //  texto de la línea 1
      mostrarMarcoFlecha();
      break;
    case 2:
      dialogosTextos(guionIntro[0][1]); //  texto de la línea 2
      mostrarMarcoFlecha();
      break;
    case 3:
      dialogosTextos(guionIntro[0][2]); //  texto de la línea 3
      mostrarMarcoFlecha();
      break;
    case 4:
      botonesDecision();
      break;
  }
}

//switch que controla cuando después de la opción primera se elige la historia de Aang
function opcionAang(imagActual) {
  switch (imagActual) {
    case 5:
      console.log('5 aqui');
      dialogosTextos(guionIntro[1][0]);
      mostrarMarcoFlecha();
      break;
    case 6:
      dialogosTextos(guionIntro[1][1]);
      mostrarMarcoFlecha();
      break;
    case 7:
      dialogosTextos(guionIntro[1][2]);
      mostrarMarcoFlecha();
      break;
    case 8:
      dialogosTextos(guionIntro[1][3]);
      mostrarMarcoFlecha();
      break;
    case 9:
      dialogosTextos(guionIntro[1][4]);
      mostrarMarcoFlecha();
      break;
    case 10:
      console.log('10 aqui');
      dialogoDecision("¿Aang y Katara se besan?");
      botonesDecisionBeso();
      decision = true;
      break;
  }
}

//switch que controla cuando después de la opción Aang elige "NO"
function opcionAangBifu(imagActual) {
  decision = false;
  switch (imagActual) {
    case 11:
      console.log('11 aqui');
      dialogosTextos(guionIntro[3][0]);
      mostrarMarcoFlecha();
      break;
    case 12:
      dialogosTextos(guionIntro[3][1]);
      mostrarMarcoFlecha();
      break;
    case 13:
      dialogosTextos(guionIntro[3][2]);
      mostrarMarcoFlecha();
      break;
    case 14:
      dialogosTextos(guionIntro[3][3]);
      mostrarMarcoFlecha();
      break;
    case 15:
      dialogosTextos(guionIntro[3][4]);
      mostrarMarcoFlecha();
      break;
    case 16:
      dialogosTextos(guionIntro[3][5]);
      mostrarMarcoFlecha();
      break;
    case 17:
      dialogosTextos(guionIntro[3][6]);
      mostrarMarcoFlecha();
      break;
    case 18:
      dialogosTextos(guionIntro[3][7]);
      mostrarMarcoFlecha();
      break;
    case 19:
      dialogosTextos(guionIntro[3][8]);
      mostrarMarcoFlecha();
      break;
    case 20:
      console.log("Pantalla final activada en opcionAangBifu");
      
      mostrarBotonVolver();
      pantallaFinal=true;
      break;
  }
}
//switch que controla cuando se elige la opción sokka
function opcionSokka(imagActual) {
  decision = false;
  switch (imagActual) {
    case 21:
      dialogosTextos(guionIntro[2][0]);
      mostrarMarcoFlecha();
      break;
    case 22:
      dialogosTextos(guionIntro[2][1]);
      mostrarMarcoFlecha();
      break;
    case 23:
      dialogosTextos(guionIntro[2][2]);
      mostrarMarcoFlecha();
      break;
    case 24:
      dialogosTextos(guionIntro[2][3]);
      mostrarMarcoFlecha();
      break;
    case 25:
      dialogosTextos(guionIntro[2][4]);
      mostrarMarcoFlecha();
      break;
    case 26:
      dialogosTextos(guionIntro[2][5]);
      mostrarMarcoFlecha();
      break;
    case 27:
      dialogosTextos(guionIntro[2][6]);
      mostrarMarcoFlecha();
      break;
    case 28:
      dialogosTextos(guionIntro[2][7]);
      mostrarMarcoFlecha();
      break;
    case 29:
      dialogosTextos(guionIntro[2][8]);
      mostrarMarcoFlecha();
      break;
    case 30:
      console.log("Pantalla final activada en opcionAangBifu");
     
      mostrarBotonVolver();
      pantallaFinal = true;
      break;
  }
}
