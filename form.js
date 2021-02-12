class Form{
    constructor(){
        this.title = createElement("h1")
        this.inputbox = createInput("name")
        this.button = createButton("Submit")
        this.greeting = createElement("h3")
        this.reset = createButton("Reset")
    }
    display(){
        background(formbg)
        this.title.html("Speed lines")
        this.title.position(displayWidth-1000,displayHeight-900)
        this.title.style("color","red")
         
        this.inputbox.position(displayWidth-1000,displayHeight-600)
        this.inputbox.style("width","100px")
        
        this.button.position(displayWidth-1000,displayHeight-400)

        this.reset.position(displayWidth-1500,displayHeight-1000)


       

        this.button.mousePressed(()=>{
            this.button.hide()
            this.inputbox.hide()
            this.title.hide()
            playerCount = playerCount + 1;
            player.index = playerCount
            player.name = this.inputbox.value()

            player.updatePlayerCount(playerCount)
            player.updatePlayerInfo(); 

            this.greeting.html("Hi " + player.name + " please wait for other players")
            this.greeting.position(displayWidth-500,displayHeight-500)
        })
        this.reset.mousePressed(()=>{
            player.updatePlayerCount(0)
            game.updateGameState(0)
            var Plr = database.ref("players")
            Plr.remove();
        })
    }
    Hide(){
        this.greeting.hide()
    }
}