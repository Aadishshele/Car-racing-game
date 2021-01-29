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
}