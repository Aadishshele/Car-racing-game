var database;
var gameState;
var playerCount = 0
var player;
var game;
var form;
gameState = 0
function setup(){
    createCanvas(1920,1080)
    database = firebase.database()
    game = new Game()
    game.getGameState()
    game.startGame()
}
function draw(){

}