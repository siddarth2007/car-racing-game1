class Form{
    constructor(){
        this.input=createInput("name");
        this.button=createButton('play');
        this.greeting=createElement('h2');
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
        var title=createElement('h2');
        title.html("car racing game");
        title.position(330,130);
        this.input.position(330,300);
        this.button.position(500,300);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
             player.name=this.input.value();
             playerCount=playerCount+1;
             player.index=playerCount;
             player.update();
             player.updateCount(playerCount);
            this.greeting.html("hello"+name);
            this.greeting.position(400,300);

        })
    }
}