class Form{
    constructor(){

    }
    display(){
        var title = createElement("h1")
        title.html("Car racing game")
        title.position(1100,400)
        
        var inputbox = createInput("name")
        inputbox.position(1100,600)

        var button = createButton("Submit")
        button.position(1100,900)

        var greeting = createElement("h3")

        button.mousePressed(function(){
            button.hide()
            inputbox.hide()
            title.hide()
            playerCount = playerCount + 1;
            var name = inputbox.value()

            player.updatePlayerCount(playerCount)
            player.updatePlayerName(name) 

            greeting.html("Hi " + name + " please wait for other players")
            greeting.position(1100,600)
        })
    }
}