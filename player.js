const readline = require("readline-sync");

class Player {
    constructor(){
        this.name = readline.question("Please print your name: ");
        this.score = 0;
    }

    add_to_score(){
        this.score = this.score+1;
    }
}

random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};
