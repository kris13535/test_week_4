const readline = require("readline-sync");

game =(num_of_games,player1,player2, status = false, count_raund = 1) => {

    if(status == true){
        let random_num = random(-5,13)
        let player_scord_this_round= "";

        if(Math.abs(random_num) %2 == 0){
            player_scord_this_round = player1.name;
            player1.add_to_score();
            
        }
        else if(Math.abs(random_num)%2 == 1){
            player_scord_this_round = player2.name;
            player2.add_to_score();
        }

        console.log(`Round #${count_raund}, random number is ${random_num}, ${player_scord_this_round} scored!`)
        console.log(`Status: ${player1.name} ${player1.score}, ${player2.name} ${player2.score}`)
    
    }
    else{
        for ( let i = 0; i < num_of_games+1 ; i++){
            if(player1.score == Math.ceil(num_of_games/2)){
                console.log(`${player1.name} is win!`)
                break;
            }
            if(player2.score ==  Math.ceil(num_of_games/2) ){
                console.log(`${player2.name} is win!`)
                break;
            }
            let random_num = random(-5,13)
        
            let player_scord_this_round= "";

            if(Math.abs(random_num) %2 == 0){
                player_scord_this_round = player1.name;
                player1.add_to_score();
                
            }
            else if(Math.abs(random_num)%2 == 1){
                player_scord_this_round = player2.name;
                player2.add_to_score();
            }

            console.log(`Round #${i+1}, random number is ${random_num}, ${player_scord_this_round} scored!`)
            console.log(`Status: ${player1.name} ${player1.score}, ${player2.name} ${player2.score}`)
        }
   
    }
  
};


const num_of_games = readline.question("Please print the num of games you want: ");


// const player1 = new Player();
// const player2 = new Player();

// console.log(player1);
// console.log(player2);

// game(num_of_games,player1,player2);


