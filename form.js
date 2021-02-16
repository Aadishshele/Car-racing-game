class Form{
    constructor(){
        this.title = createElement("h1")
        this.n = createElement("h2")
        this.inputbox = createInput("")
        this.button = createButton("Submit")
        this.greeting = createElement("h3")
        this.reset = createButton("Reset")
    }
    display(){
        background(formbg)
        this.title.html("Speed lines")
        this.title.position(displayWidth-1200,displayHeight-900)
        this.title.style("color","blue")
         
        this.n.html("Please Enter name here -->")
        this.n.position(displayWidth-1490,displayHeight-620)
        this.n.style("color","black")

        this.inputbox.position(displayWidth-1200,displayHeight-600)
        this.inputbox.style("width","100px")
        
        this.button.position(displayWidth-1200,displayHeight-400)
        this.button.style("width","100px")

        this.reset.position(displayWidth-1700,displayHeight-1000)
        this.reset.style("width","100px")

       

        this.button.mousePressed(()=>{
            this.button.hide()
            this.inputbox.hide()
            this.title.hide()
            this.n.hide()
            playerCount = playerCount + 1;
            player.index = playerCount
            player.name = this.inputbox.value()

            player.updatePlayerCount(playerCount)
            player.updatePlayerInfo(); 

            this.greeting.html("Hi " + player.name + " please wait for other players")
            this.greeting.position(displayWidth-1100,displayHeight-600)
            this.greeting.style("color","blue")
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