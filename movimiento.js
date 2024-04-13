function preload(){
    camina=loadAnimation("./Sprites/y0.png", "./Sprites/y1.png", "./Sprites/y2.png")
    f=loadImage("./ground/atras/fondo.png")
    F=loadImage("./ground/atras/fondo-1.png.png")
    i=loadImage("./ground/atras/fondo-1.png.png")
    M=loadImage("./Sprites/M0.png")
    CY=loadImage("./Sprites/y0-1.png.png")
}
var vida=5
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
    frameRate(60)
    man=createGroup()
    cad=createGroup()
    for (bar=1; bar<=vida; bar++){
        cy=createSprite(50*bar,50)
        cy.addImage(CY)
        cad.add(cy)
    }
}
function EC(yoshi, manzana){
    manzana.destroy()
    vida++
    cy=createSprite(50*vida,50)
    cy.addImage(CY)
    cad.add(cy)
}
function draw(){
    background("deepSkyBlue")
    drawSprites()
    if (frameCount%60==0){
        manzana=createSprite(yoshi.x+random(50, 200), yoshi.y)
        manzana.addImage(M)
        man.add(manzana)
    }
    //text(vida)
    //tiempo vidas final=18000
    yoshi.overlap(man, EC)
    if (keyDown(RIGHT_ARROW)){
        yoshi.mirrorX(1)
        yoshi.x+=50
        camera.position.x=yoshi.x
        cad.forEach(cv=>{
            cv.x=cv.x+50
        })
    }
    if (keyDown(LEFT_ARROW)){
        yoshi.mirrorX(-1)
        yoshi.x-=10
        camera.position.x=yoshi.x
        cad.forEach(cv=>{
            cv.x=cv.x-10
        })
    }
    if (camera.position.x-2800>Fondo.x){
        Fondo.x=Fondo.x+4330
    }
    if (camera.position.x-2800>I.x){
        I.x=I.x+4330
    }
    
    }