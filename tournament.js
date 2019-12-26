
tournament = () => {
    
    const num_of_players = readline.question("Please print the num of players you want (more then 2 and less then 7): ");

    const player1 = new Player();
    const player2 = new Player();
    let player3 = new Player();
    let player4 = new Player();
    let player5 = new Player();
    let player6 = new Player();
    let player7 = new Player();

    let lst = [player1,player2,player3,player4,player5,player6,player7];
    
    let count_raund = 1;

    for( let i = 0; i < num_of_games+1 ; i++){

        let random_player1 = random(1,num_of_players);
        let random_player2 = random(1,num_of_players);

        game(num_of_games,lst[random_player1-1],lst[random_player2-1], true, count_raund++);

        if(lst[random_player1-1].score == Math.ceil(num_of_games/2)){
            console.log(`${player1.name} is win!`)
            break;
        }
        if(lst[random_player2-1].score ==  Math.ceil(num_of_games/2) ){
            console.log(`${player2.name} is win!`)
            break;
        }
        
    }
    
}


const num_of_games = readline.question("Please print the num of games you want: ");


// const player1 = new Player();
// const player2 = new Player();

// console.log(player1);
// console.log(player2);

// game(num_of_games,player1,player2);

tournament();

