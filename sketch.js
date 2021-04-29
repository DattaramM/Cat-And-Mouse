// Garden(Background)
var backgroundImage;

// Tom
var tom, tom_sleepingImage, tom_runningAnimation, tom_sittingImage, tom_sittingAnimation;

// Jerry
var jerry, jerry_eatingImage, jerry_teasingAndDancingAnimation, jerry_standingImage, jerry_standingAnimation; 

// edges
var edges;

// total width
var total_width = 275.15500000000003;

// net x
var net_x;

// Preload Function
function preload() {
    //load the images here

    // setting background image
    backgroundImage = loadImage("images/garden.png");

    // loading Tom sleeping image
    tom_sleepingImage = loadAnimation("images/cat1.png");
    // loading Tom running animation
    tom_runningAnimation = loadAnimation("images/cat2.png", "images/cat3.png");
    // loading Tom sitting image
    tom_sittingImage = loadAnimation("images/cat4.png");
    tom_sittingAnimation = loadAnimation("images/cat4.png");

    // loading Jerry eating image
    jerry_eatingImage = loadAnimation("images/mouse1.png");
    // loading Jerry dancing animation
    jerry_teasingAndDancingAnimation = loadAnimation("images/mouse2.png", "images/mouse3.png");
    // loading Jerry standing image
    jerry_standingImage = loadAnimation("images/mouse4.png");
    jerry_standingAnimation = loadAnimation("images/mouse4.png");
}

// setup Function
function setup(){
    // creating canvas
    createCanvas(1000,800);

    // create tom and jerry sprites here

    // creating tom sprite
    tom = createSprite(870, 600, 50, 50);
    tom.addAnimation("tomSleeping", tom_sleepingImage);
    //tom.addAnimation("tomCatchingJerry", tom_runningAnimation);
    //tom.addAnimation("tomSitting", tom_sittingAnimation);
    tom.scale = 0.2;
    tom.debug = true;
    //tom.debug = false;
    tom.setCollider("rectangle", 100, -20, 1500, 825);

    // creating jerry sprite
    jerry = createSprite(200, 600, 50, 50);
    //jerry.addAnimation("Jerry teasing and dancing", jerry_teasingAndDancingAnimation);
    //jerry.addAnimation("Jerry standing", jerry_standingAnimation);
    jerry.addAnimation("jerryEating", jerry_eatingImage);
    jerry.scale = 0.13;
    jerry.debug = true;
    //jerry.debug = false;
    jerry.setCollider("rectangle", 75, -15, 925, 900);

    edges = createEdgeSprites();
}

// draw Function
function draw() {
    // setting background color
    background(backgroundImage);

    //background(255);

    keyPressed();

    //tom.x = mouseX;
    //tom.y = mouseY;

    tom.collide(edges);

    //Write condition here to evalute if tom and jerry collide
    if (tom.x - jerry.x < tom.width/2 + jerry.width/2) {
           tom.addAnimation("tomLastImage", tom_sittingImage);
           //tom.changeAnimation("Tom sitting");
           tom.setVelocityX = 0;
           //tom.x = 300;
           jerry.addAnimation("jerryLastImage", jerry_standingImage);
           jerry.changeAnimation("jerryLastImage");
           //jerry.changeAnimation("Jerry standing");
       }

    // drawSprites function to draw sprites
    drawSprites();

    //keyPressed();

    //console.log(frameCount);

    //console.log(tom.width/2 + jerry.width/2);

    console.log(tom.x - jerry.x);
}

// KeyPressed Function
function keyPressed(){
    //For moving and changing animation write code here
    if (keyCode === LEFT_ARROW) {
        tom.addAnimation("tom_Running", tom_runningAnimation);
        tom.velocityX = -4;
        tom.changeAnimation("tom_Running");
        jerry.frameDelay = 25;
        jerry.addAnimation("jerryTeasing", jerry_teasingAndDancingAnimation);
        jerry.changeAnimation("jerryTeasing")
    }    
}
