var database,playerCount,form,player,game;
var gameState=0;
function setup(){
    var canvas=createCanvas(400,400);
    database=firebase.database();
    form=new Form();
}
function draw(){
    background("white");
    form.display();
}