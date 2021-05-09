const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    bg = loadImage("sunrise1.png"),("sunrise2.png"),("sunrise3.png"),("sunrise4.png"),("sunrise5.png"),("sunrise6.png"),
    ("sunset7.png"), ("sunset8.png"), ("sunset9.png"), ("sunset10.png"), ("sunset11.png"), ("sunset12.png");
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){
        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata"); 
        var responseJson = await response.json();
        console.log(responseJson);
    
        var dt = responseJson.datetime;
        console.log(dt);
    
        var hour = dt.slice(11,13);
        console.log(hour);
    
        if(hour>=04 && hour<=06){
            bg ="sunrise1.png";
        }
        else if(hour>=06 && hour<=07){
            bg = "sunrise2.png";
        }
        else if(hour>=07 && hour<=08){
            bg = "sunrise3.png";
        }
        else if(hour>=08 && hour<=10){
            bg = "sunrise4.png";
        }
        else if(hour>=10 && hour<=15){
            bg = "sunrise5.png";
        }
        else if(hour>=15 && hour<=16){
            bg = "sunrise6.png";
        }
        else if(hour>=16 && hour<=17){
            bg = "sunset7.png";
        }
        else if(hour>=17 && hour<=18){
            bg = "sunset8.png";
        }
        else if(hour>=18 && hour<=19){
            bg = "sunset9.png";
        }
        else if(hour>=19 && hour<=20){
            bg = "sunset10.png";
        }
        else if(hour>=20 && hour<=23){
            bg = "sunset11.png";
        }
        else if(hour>=23 && hour<=04){
            bg = "sunset12.png";
        }
           
    
        backgroundImg = loadImage(bg);
    // write code to fetch time from API

    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}
