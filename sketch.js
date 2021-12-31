var ball;

var database , pos;

function setup(){
    createCanvas(500,500);

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    database = firebase.database()

    /*
        ball : {
            position : {
                x : 100 , 
                y : 100
            }
        }

    */

    //ref() --> it refers to the location in database 
    //on() --> it creates a listener which will read the value from the database

    database.ref("ball/position").on("value" , readPosition ) //readPosition() --> is user defined func
}

function draw(){
    background("white");

    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }

    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }

    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }

    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }

    drawSprites();
}

function readPosition(data){

    pos = data.val()

    //we are storing the values from db in var pos

    console.log(pos.x)

    ball.x = pos.x
    ball.y = pos.y

}

function changePosition(x1,y1){

    //set() --> helps to set up new values to db

    database.ref("ball/position").set({
        'x' : pos.x + x1,
        'y' : pos.y + y1

    })

}
