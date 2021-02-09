var database;
var gameState;
var playerCount = 0
var player;
var game;
var form;
var Allplayers;
var Car1;
var car1img;
var car2img;
var Car2;
var track;

var ground;
carsArray = []
gameState = 0
function preload(){
    car1img = loadImage("images/car1.png")
    car2img = loadImage("images/car2.png")
    track = loadImage("images/track.jpg")
    ground = loadImage("images/ground.png")
}
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
    if(gameState === 2){
        clear();
        game.endGame();
    }
}