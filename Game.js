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
        carsArray = [Car1,Car2]
    }
    playGame(){
        form.Hide()
        Player.getAllPlayerInfo();
        if(Allplayers !== undefined){
            var y = 100
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
                carsArray[index].y = displayHeight-Allplayers[PLR].playerDistance
                if(PLR === "player" + player.index){
                    carsArray[index].shapeColor = "red";
                    camera.position.x = displayWidth/2
                    camera.position.y = carsArray[index].y
                }
                else{
                    carsArray[index].shapeColor = "black"
                }
                index = index + 1
                x = x + 100

                drawSprites();
           }
        }
        if(keyIsDown(UP_ARROW) && player.index !== 0){
            player.distance = player.distance+10
            player.updatePlayerInfo()
        }
    }
}