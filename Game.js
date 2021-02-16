class Game{
    constructor(){

    }
    getGameState(){
        var stateRef = database.ref("gameState")
        stateRef.on("value",function (data){
            gameState=data.val()
        })
        
    }
    updateGameState(state){
        var stateRef = database.ref("/")
        stateRef.update({
            gameState : state
        })
    }
    startGame(){
        if(gameState === 0){
            player = new Player()
            player.getPlayerCount()
            form = new Form()
            form.display()
        }
        Car1 = createSprite(500,500,50,50)
        Car2 = createSprite(400,400,50,50)
        arrow = createSprite(450,500,50,50)
        Car1.addImage("car1img",car1img)
        Car2.addImage("car2img",car2img)
        arrow.addImage("arrowimg",arrowimg)
        arrow.scale=0.1
        carsArray = [Car1,Car2]
    }
    playGame(){
        background(ground)
        form.Hide()
        Player.getAllPlayerInfo();
        if(Allplayers !== undefined){
            var y = 300
            var x = 500
            var index = 0
            for(var PLR in Allplayers){
                /*if(PLR === "player" + player.index){
                    fill("red")
                }
                else{
                    fill("black")
                }
                text(Allplayers[PLR].playerName + ":" + Allplayers[PLR].playerDistance , 400,y )
                y = y + 200
            */

                carsArray[index].x = x
                carsArray[index].y = displayHeight-Allplayers[PLR].playerDistance-30
                if(PLR === "player" + player.index){
                    carsArray[index].shapeColor = "red";
                    camera.position.x = displayWidth/2
                    camera.position.y = carsArray[index].y
                    arrow.y = carsArray[index].y+90
                    arrow.x = x
                }
                else{
                    carsArray[index].shapeColor = "black"
                }
                index = index + 1
                x = x + 800
                if(player.distance === 4990){
                    gameState = 2
                }
                image(track,0,-displayHeight*3.9,displayWidth,displayHeight*5)
                drawSprites();
           }
        }
        if(keyIsDown(UP_ARROW) && player.index !== 0 && player.distance <= 4990){
            player.distance = player.distance+10
            player.updatePlayerInfo()
            //Sound.play()
        }
    }
    endGame(){
        console.log("Game Over")
        game.updateGameState(2);
    }
}