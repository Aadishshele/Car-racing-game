var database;
var gameState;
var playerCount = 0
var player;
var game;
var form;
var Allplayers;
var Car1;
var Car2;
carsArray = []
gameState = 0
function setup(){
    createCanvas(displayWidth,displayHeight)
    database = firebase.database()
    game = new Game()
    game.getGameState()
    game.startGame()
}
function draw(){
    if(playerCount === 2){
        game.updateGameState(1)
    }
    if(gameState === 1){
        clear();
        game.playGame()
    }
}