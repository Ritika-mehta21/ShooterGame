let startGame = document.getElementById("start-game");
let player1 = document.getElementById("player1");
let p1score1 = document.getElementById("player1_1");
let p1score2 = document.getElementById('player1_2');
let p1score3 = document.getElementById('player1_3');
let p1score4 = document.getElementById('player1_4');
let p1score5 = document.getElementById('player1_5');
let player2 = document.getElementById("player2");
let p2score1 = document.getElementById("player2_1");
let p2score2 = document.getElementById('player2_2');
let p2score3 = document.getElementById('player2_3');
let p2score4 = document.getElementById('player2_4');
let p2score5 = document.getElementById('player2_5');
let player1_btns = document.getElementsByClassName('player1-btns');
let round_score = document.getElementById('round_score');
let round_score_1_1 = document.getElementById('round_score_1_1');
let round_score_2_1 = document.getElementById('round_score_2_1');

let round_score_1_2 = document.getElementById('round_score_1_2');
let round_score_2_2 = document.getElementById('round_score_2_2');

let round_score_1_3 = document.getElementById('round_score_1_3');
let round_score_2_3 = document.getElementById('round_score_2_3');

let round_score_1_4 = document.getElementById('round_score_1_4');
let round_score_2_4 = document.getElementById('round_score_2_4');

let round_score_1_5 = document.getElementById('round_score_1_5');
let round_score_2_5 = document.getElementById('round_score_2_5');

let game_winner = document.getElementById('game_winner');

round_score = [round_score_1_1,round_score_2_1,round_score_1_2,round_score_2_2, round_score_1_3, round_score_2_3,round_score_1_4, round_score_2_4,round_score_1_5,round_score_2_5];
var player1_score = 100;
    
        player1.innerHTML = player1_score;
        var player2_score = 100;
        player2.innerHTML = player2_score;
startGame1();
// var player1_score = 100;

//     player1.innerHTML=player1_score;
function startGame1() {
    startGame.addEventListener("click", function () {
    
        var player1_score = 100;
    
        player1.innerHTML = player1_score;
        var player2_score = 100;
        player2.innerHTML = player2_score;

    
    

        // while (player1_score >= 0 | player2_score >= 0) {
   
        p1score1.addEventListener("click", function () {
            player2_score--;
            player2.innerText = player2_score;
            round_over();
        })
        p1score2.addEventListener("click", function () {
        
            player2_score = player2_score - 2;
            player2.innerText = player2_score;
            round_over();

        })
        p1score3.addEventListener("click", function () {
        
            player2_score = player2_score - 3;
            player2.innerText = player2_score;
            round_over();

        })
        p1score4.addEventListener("click", function () {
      
            player2_score = player2_score - 4;
            player2.innerText = player2_score;
            round_over();

        })
        p1score5.addEventListener("click", function () {
       
            player2_score = player2_score - 5;
            player2.innerText = player2_score;
            round_over();

        })


    
        p2score1.addEventListener("click", function () {
            player1_score--;
            player1.innerText = player1_score;
            round_over();

        })
        p2score2.addEventListener("click", function () {
            player1_score = player1_score - 2;
            player1.innerText = player1_score;
            round_over();

        })
        p2score3.addEventListener("click", function () {
            player1_score = player1_score - 3;
            player1.innerText = player1_score;
            round_over();

        })
        p2score4.addEventListener("click", function () {
            player1_score = player1_score - 4;
            player1.innerText = player1_score;
            round_over();

        })
        p2score5.addEventListener("click", function () {
            player1_score = player1_score - p1score5.value;
            player1.innerText = player1_score;
            round_over();

             
       
        })
      
        var count1 = 0;
        var count2 = 0;

      var  i = 0;

        function round_over() {
             var round_win_1 = 0;
        var round_win_2 = 0;
            if (player1_score <= 0) {
                var player1roundscore = document.createElement('p');
               var player2roundscore = document.createElement('p');

                // round_score.appendChild(player1roundscore);
                player1roundscore.innerText = round_win_1;
                player2roundscore.innerText = round_win_2 + 10;
                count2++;
                player1_score = 100;
                player2_score = 100;
                player1.innerText = player1_score;
                player2.innerText = player2_score;
                round_score[i].appendChild(player1roundscore);
                ++i;
                round_score[i].appendChild(player2roundscore);
                ++i;
                if (count2 >= 3) {
                    game_winner.innerHTML = "Player 2 wins!";
                    
                }
                // round_score.appendChild(round_score_1.appendChild(player1roundscore)); round_score.appendChild(round_score_1.appendChild(player2roundscore));
                // round_score_1.appendChild(player2roundscore.value);
                // round_score.appendChild(round_score_1);

               
               startGame1();
                // alert(player1_score);
            }
            else if (player2_score <= 0) {
                 var player1roundscore = document.createElement('p');
               var player2roundscore = document.createElement('p');

                // round_score.appendChild(player1roundscore);
                player1roundscore.innerText = round_win_1+ 10;
                player2roundscore.innerText = round_win_2 ;
                count1++;
                player1_score = 100;
                player2_score = 100;
                player1.innerText = player1_score;
                player2.innerText = player2_score;
                round_score[i].appendChild(player1roundscore);
                ++i;
                round_score[i].appendChild(player2roundscore);
                ++i;
                if (count1 >= 3) {
                    game_winner.innerHTML="Player 1 wins!"
                }
               


               startGame1();
            }
        }
   
    })
}


// function winner_round_score() {
//     var win_round_playername = document.createElement('p');
    
//     if (player1_score < 0) {
//         win_round_playername.innerText = "Player 1";
//         winner_round.appendChild(win_round_playername);
//  }
// }

