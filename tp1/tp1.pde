PImage miFototres; //imagen

void setup() {
  size(800, 400);
  miFototres = loadImage("data/Fototres.png"); //cargar imagen
  background(24, 73, 114); //color
  
}

void mousePressed(){
  println(" X  Y");
  println(mouseX+","+mouseY); //coordenadas
  
} 
  
void draw() {

  image(miFototres, 0, 0, 400, 400); //colocar imagen


  ///////////////////////// moon
  noStroke(); //line
  fill(35, 81, 114); //color background moon
    ellipse(600, 193, 105, 100);
  
  fill(215, 181, 156); //color moon original
    ellipse(600, 196, 100, 90); 
  
  fill(201, 168, 149); //color details
    ellipse(600, 186, 50, 50); 
    ellipse(580, 186, 50, 50); 
    ellipse(570, 200, 20, 20); 
    ellipse(628, 190, 20, 20);
    ellipse(634, 206, 20, 20);    
    ellipse(600, 212, 20, 20);  
    ellipse(615, 165, 20, 20);  
    ellipse(573, 216, 20, 20); 
    ellipse(599, 164, 20, 20); 
  
  fill(215, 181, 156); //color moon original details
    ellipse (589, 186, 5, 5);
    ellipse (608, 191, 15, 15);
    ellipse (578, 195, 10, 10);
    ellipse (576, 186, 5, 5);
    ellipse (606, 210, 10, 10);
    ellipse (621, 171, 10, 10);
  
  ///////////////////////// background2
  fill(18, 68, 117); //color   
    rect(400, 0, 800, 20);
   
  fill(19, 71, 118); //color  
    rect(400, 10, 800, 20);
   
  fill(21, 72, 117); //color  
    rect(400, 20, 800, 20);
   
  ///////////////////////// mountain  
  fill(12, 53, 86); //color
    rect(425, 206, 60, 50);
    rect(400, 220, 400, 300);
    triangle(475, 200, 442, 232, 540, 237);
    triangle(400, 500, 1300, 500, 400, 200);
    triangle(584, 214, 628, 243, 520, 240);
    triangle(625, 214, 658, 260, 545, 240);
  
  ///////////////////////// mountain cerca 
  fill(10, 43, 74); //color
    rect(670, 208, 70, 70);
    triangle(20, 1000, 1300, 500, 740, 190);
    triangle(200, 700, 743, 227, 650, 205); 
  
  fill(10, 48, 77); //color2
    triangle(449, 246, 580, 324, 400, 294);
    triangle(400, 246, 580, 324, 400, 294);
  
  fill(15, 46, 74); //color3
    triangle(562, 247, 639, 315, 507, 310);
  
  fill(10, 44, 72); //color4
    triangle(401, 269, 630, 349, 402, 388);
    triangle(511, 266, 609, 337, 443, 294);
 
  
  ///////////////////////// tree lejos
  fill(2, 10, 29); //color
    triangle(429, 305, 460, 390, 410, 400);
    triangle(400, 400, 420, 700, 420, 300);
    triangle(400, 400, 450, 600, 400, 300);
    triangle(518, 409, 500, 500, 500, 280);
    triangle(420, 400, 470, 600, 440, 290);
    triangle(450, 400, 500, 600, 490, 270);
    triangle(650, 500, 550, 640, 590, 285);
    triangle(450, 400, 470, 600, 440, 272);
    triangle(600, 650, 650, 640, 600, 270);
    triangle(530, 500, 450, 600, 500, 270);
    triangle(550, 500, 450, 670, 550, 250);
    triangle(600, 500, 550, 670, 550, 260);
    triangle(700, 700, 750, 670, 750, 240);
    triangle(600, 600, 850, 670, 750, 280);
    triangle(700, 670, 750, 670, 700, 250);
    triangle(650, 770, 750, 670, 600, 260);
    triangle(650, 770, 750, 670, 600, 250);
    triangle(680, 790, 770, 700, 650, 255);
    triangle(680, 790, 770, 740, 620, 250);
    triangle(730, 600, 850, 670, 780, 240);
    triangle(740, 600, 860, 680, 800, 200);
    triangle(735, 234, 769, 342, 709, 300);
    triangle(668, 250, 707, 436, 650, 328);
    triangle(690, 249, 727, 322, 658, 334);
    triangle(528, 272, 568, 378, 493, 380);
    triangle(593, 269, 629, 339, 564, 336);
    triangle(507, 297, 538, 338, 472, 347);
    triangle(615, 271, 669, 329, 585, 329);
   
  ///////////////////////// tree frente   
  fill(0,0, 8); //color
    triangle(420, 400, 470, 600, 440, 300);
    triangle(450, 400, 500, 600, 490, 290);
    triangle(650, 500, 550, 640, 590, 300);
    triangle(450, 400, 470, 600, 440, 294);
    triangle(600, 650, 650, 640, 600, 297);
    triangle(530, 500, 450, 600, 500, 300);
    triangle(550, 500, 450, 670, 550, 300);
    triangle(600, 500, 550, 670, 550, 300);
    triangle(700, 700, 750, 670, 750, 300);
    triangle(600, 600, 850, 670, 750, 300);
    triangle(700, 670, 750, 670, 700, 300);
    triangle(650, 770, 750, 670, 600, 300);
    triangle(650, 770, 750, 670, 600, 300);
    triangle(680, 790, 770, 700, 650, 300);
    triangle(680, 790, 770, 740, 620, 300);
    triangle(730, 600, 850, 670, 780, 300);
    triangle(740, 600, 860, 680, 800, 250);
    triangle(420, 500, 560, 480, 458, 290);
    triangle(516, 500, 560, 480, 516, 290);
    triangle(513, 600, 600, 600, 513, 290);
    triangle(682, 268, 737, 400, 645, 400);
    triangle(575, 268, 650, 386, 518, 400);
    triangle(715, 230, 756, 370, 668, 400); 
    triangle(764, 206, 722, 366, 790, 400); 
    triangle(641, 271, 678, 354, 599, 400);  
    triangle(448, 302, 486, 368, 425, 378);  
    triangle(471, 289, 507, 366, 456, 374);
    triangle(400, 306, 470, 384, 404, 391);
    triangle(423, 306, 458, 372, 410, 367);
    triangle(781, 207, 795, 342, 771, 344); 
    

}
