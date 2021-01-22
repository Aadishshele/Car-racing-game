var ball;
var database;
var pos;
function setup(){
    createCanvas(500,500);

    database = firebase.database()

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    var positionref = database.ref("Ball/position");
    positionref.on("value",readposition,showerror);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function writePosition(x,y){
    var positionref = database.ref("Ball/position");
    positionref.update({
        x : ball.x + x,
        y:  ball.y + y
    })
}


function readposition(data){
    pos =data.val();
    ball.x=pos.x;
    ball.y=pos.y;
    
}


function showerror(){
    console.log("Something went wrong!!")
}