class Form{
    constructor(){
        this.title = createElement("h1")
        this.inputbox = createInput("name")
        this.button = createButton("Submit")
        this.greeting = createElement("h3")
    }
    display(){
        
        this.title.html("Car racing game")
        this.title.position(displayWidth-1000,displayHeight-900)
        
         
        this.inputbox.position(displayWidth-1000,displayHeight-600)

        
        this.button.position(displayWidth-900,displayHeight-400)

       

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

    }
    Hide(){
        this.greeting.hide()
    }
}