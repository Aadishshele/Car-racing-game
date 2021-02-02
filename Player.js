class Player{
    constructor(){
        this.name = null
        this.distance = 0
        this.index = 0
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
    updatePlayerInfo(){
        var playerIndex = "players/player" + this.index
        var nameRef = database.ref(playerIndex)
        nameRef.set({
            playerName : this.name,
            playerDistance : this.distance
        })
    }
    static getAllPlayerInfo(){
        var playerInfo = database.ref("players")
        playerInfo.on("value",function (data){
            Allplayers = data.val();
        })
        

    }
}