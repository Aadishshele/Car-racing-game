class Form{
    constructor(){
        this.title = createElement("h1")
        this.inputbox = createInput("name")
        this.button = createButton("Submit")
        this.greeting = createElement("h3")
    }
    display(){
        
        this.title.html("Car racing game")
        this.title.position(1100,400)
        
         
        this.inputbox.position(1100,600)

        
        this.button.position(1100,900)

       

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
            this.greeting.position(1100,600)
        })

    }
    Hide(){
        this.greeting.hide()
    }
}