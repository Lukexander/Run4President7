let spriteSheet;
let sprite;
let score=0;
let timer=100;
const imageSize=600;
let check;
let scoreText;
function setup() {
    createCanvas(windowWidth,windowHeight );
    background('blue');
    spriteSheet = loadImage("presidents_sheet.png");

    textSize(100);
    button = createButton('').size(100,100);
    button.mousePressed(isPresident);
   
// check.mouseClicked(isPresident);
}

function draw() {
    background('blue');
      sprite = spriteSheet.get(8, 0, 180, 174);
    sprite.resize(0, imageSize);
    image(sprite, windowWidth/2-imageSize/2,windowHeight/2-imageSize/2 );

     scoreText=text(score,80,140);
     text("🕘"+ timer,windowWidth-400,140);
     check=text("✔",windowWidth-200,windowHeight-125);
     button.position(windowWidth-200,windowHeight-200);
    button.visible=false
     
}

function isPresident(){
    
    score=score+100;
}