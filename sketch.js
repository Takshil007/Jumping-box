var canvas;
var music;
var block1, block2,block3,block4;
var ball,edges;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(100,585,190,20);
    block1.shapeColor = "yellow";

    block2 = createSprite(310,585,190,20);
    block2.shapeColor = "red";

    block3 = createSprite(520, 585, 190, 20);
    block3.shapeColor = "black";

    block4 = createSprite(720,585,190,20);
    block4.shapeColor = "green";

    ball = createSprite(random(20,750),105,30,30);
    ball.shapeColor = "white";
   
    //create ball sprite and give velocity
    ball.velocityX = -3;
    ball.velocityY = 6;

}

function draw() {
    background(rgb(0,0,255));
    //create edgeSprite
    edges = createEdgeSprites();
    ball.bounceOff(edges);

    
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "black";
        music.play();
        ball.bounceOff(block1);
    }

    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "red";
        music.play();
        ball.bounceOff(block2);
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "yellow";
        music.play();
        ball.bounceOff(block3);
    }
 
    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "green";
        music.play();
        ball.bounceOff(block4);
    }


    //add condition to check if box touching surface and make it box
    drawSprites();
}
