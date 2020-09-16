var manFroViewImg,manBackViewImg,manRightViewImg,manLeftViewImg;
var saniImg,virus1Img,virus2Img,virus3Img;
var man,sanitizer1,sanitizer2,sanitizer3,sanitizer4;
var virus1,virus2,virus3;
function preload(){
manFroViewImg = loadAnimation("manfroviews/manfroview1.png","manfroviews/manfroview2.png","manfroviews/manfroview3.png",
"manfroviews/manfroview4.png","manfroviews/manfroview5.png","manfroviews/manfroview6.png","manfroviews/manfroview7.png",
"manfroviews/manfroview8.png","manfroviews/manfroview9.png");

manBackViewImg = loadAnimation("mantopviews/mantopview1.png","mantopviews/mantopview2.png","mantopviews/mantopview3.png"
,"mantopviews/mantopview4.png","mantopviews/mantopview5.png","mantopviews/mantopview6.png","mantopviews/mantopview7.png"
,"mantopviews/mantopview8.png","mantopviews/mantopview9.png");

manRightViewImg  = loadAnimation("manrightviews/manrightview1.png","manrightviews/manrightview2.png",
"manrightviews/manrightview3.png","manrightviews/manrightview4.png","manrightviews/manrightview5.png",
"manrightviews/manrightview6.png","manrightviews/manrightview7.png","manrightviews/manrightview8.png",
"manrightviews/manrightview9.png");

manLeftViewImg = loadAnimation("manleftviews/manleftview1.png","manleftviews/manleftview2.png","manleftviews/manleftview3.png"
,"manleftviews/manleftview4.png","manleftviews/manleftview5.png","manleftviews/manleftview6.png","manleftviews/manleftview7.png"
,"manleftviews/manleftview8.png","manleftviews/manleftview9.png");

saniImg = loadImage("power/sanitizer.png");
virus1Img = loadImage("viruses/virus1.png");
virus2Img = loadImage("viruses/virus2.png");
virus3Img = loadImage("viruses/virus3.png");
}
function setup() {
  createCanvas(1000,500);
 man = createSprite(200,450,20,20);
 man.addAnimation("frontView",manFroViewImg);
 
 virus1 = createSprite(50,200,20,20);
virus1.addImage(virus1Img);
virus1.scale = 0.5;

 virus2 = createSprite(50,220,20,20);
 virus2.addImage(virus2Img);
 virus2.scale = 0.5;

 virus3 = createSprite(50,240,20,20);
virus3.addImage(virus3Img);
virus3.scale = 0.5;

 sanitizer1 =createSprite(100,100,20,20);
 sanitizer1.addImage(saniImg);
 sanitizer1.scale = 0.5;

 sanitizer2 = createSprite(600,300,20,20);
sanitizer2.addImage(saniImg);
sanitizer2.scale = 0.5;

 sanitizer3 = createSprite(800,400,20,20);
sanitizer3.addImage(saniImg);
sanitizer3.scale = 0.5; 

 sanitizer4 = createSprite(400,200,20,20);
 sanitizer4.addImage(saniImg);
sanitizer4.scale = 0.5;
}

function draw() {
  background(255,255,255);  
  
  drawSprites();
}