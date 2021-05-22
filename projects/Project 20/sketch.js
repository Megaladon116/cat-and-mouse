var cat, mouse;

function preload() {
    catImg = loadImage("images/cat1.png")
    catImg2 = loadImage("images/cat2.png")
    catImg3 = loadImage("images/cat3.png")
    catImg4 = loadImage("images/cat4.png")
    mouseImg = loadImage("images/mouse1.png")
    mouseImg2 = loadImage("images/mouse2.png")
    mouseImg3 = loadImage("images/mouse3.png")
    mouseImg4 = loadImage("images/mouse4.png")
    bgImg = loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
    cat = createSprite(700,700)
    cat.addImage(catImg)
    cat.scale = 0.15
    mouse = createSprite(200,700)
    mouse.addImage(mouseImg)
    mouse.scale = 0.1
    mouse.addAnimation("images/ mouse2.png, mouse3.png")

}

function draw() {

    background(bgImg);

    cat.display()
    mouse.display()

   
    //Write condition here to evalute if tom and jerry collide

    if(keyWentDown("left")){

        mouse.addAnimation("mouseRunning", mouseImg2, mouseImg3);
        mouse.changeAnimation("mouseRunning")
              

        cat.addAnimation("catRunning", catImg2, catImg3);
        cat.changeAnimation("catRunning")
        cat.velocityX = -4
    }

    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX= 0
        cat.addAnimation("catHappy", catImg4)
        cat.changeAnimation("catHappy")

        mouse.addAnimation("mouseHappy", mouseImg4)
        mouse.changeAnimation("mouseHappy")
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
