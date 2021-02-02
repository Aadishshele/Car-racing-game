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
    }
    playGame(){
        form.Hide()
        Player.getAllPlayerInfo();
        if(Allplayers !== undefined){
            var y = 100
            for(var PLR in Allplayers){
                if(PLR === "player" + player.index){
                    fill("red")
                }
                else{
                    fill("black")
                }
                text(Allplayers[PLR].playerName + ":" + Allplayers[PLR].playerDistance , 400,y )
                y = y + 200
            }
        }
        if(keyIsDown(UP_ARROW) && player.index !== 0){
            player.distance = player.distance+10
            player.updatePlayerInfo()
        }
    }
}