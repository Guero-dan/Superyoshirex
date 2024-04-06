function preload(){
    camina=loadAnimation("./Sprites/y0.png", "./Sprites/y1.png", "./Sprites/y2.png")
    f=loadImage("./ground/atras/fondo.png")
    F=loadImage("./ground/atras/fondo-1.png.png")
    i=loadImage("./ground/atras/fondo-1.png.png")
}
function setup(){
    createCanvas(windowWidth, windowHeight)
    fondo=createSprite(917,height-400)
    fondo.addImage(f)
    fondo.scale=3
    Fondo=createSprite(5830,height-400)
    Fondo.addImage(F)
    Fondo.scale=3
    I=createSprite(10150,height-400)
    //suma de 4320
    I.addImage(i)
    I.scale=3
    yoshi=createSprite(width/2, height*0.6)
    yoshi.addAnimation("camina", camina)
}
function draw(){
    background("deepSkyBlue")
    drawSprites()
    if (keyDown(RIGHT_ARROW)){
        yoshi.mirrorX(1)
        yoshi.x+=50000
        camera.position.x=yoshi.x
    }
    if (keyDown(LEFT_ARROW)){
        yoshi.mirrorX(-1)
        yoshi.x-=10
        camera.position.x=yoshi.x
    }
    if (camera.position.x-2000>Fondo.x){
        Fondo.x=Fondo.x+4320
    }
    if (camera.position.x-2000>I.x){
        I.x=I.x+4320
    }
    
    }