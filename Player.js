class Player{
    constructor(){
        
    }
    getPlayerCount(){
        var countRef = database.ref("playerCount")
        countRef.on("value",function (data){
            playerCount= data.val();
        })
    }
    updatePlayerCount(count){
        var countRef = database.ref("/")
        countRef.update({
            playerCount : count
        })
    }
    updatePlayerName(name){
        var playerIndex = "player" + playerCount
        var nameRef = database.ref(playerIndex)
        nameRef.set({
            playerName : name
        })
    }
}