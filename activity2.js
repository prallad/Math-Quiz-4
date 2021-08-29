
function back() {
window.location = "activity_1.html";
}

function getScore()
{
	score = localStorage.getItem("score");	
	document.getElementById("update").innerHTML = "<h1>Score: " + score +"</h1>";
}






get_answer = document.getElementById("input_check_box").value;
   answer = get_answer.toLowerCase();
   console.log("answer in lower case - " + answer);
   if(answer == word) 
   {
       if(answer_turn == "player1")
       {
           player1_score = player1_score +1;
           document.getElementById("player1_score").innerHTML = player1_score;
       }
       else
       {
           player2_score = player2_score +1;
           document.getElementById("player2_score").innerHTML = player2_score;
       }
   }
   if(question_turn == "player1")
   {
       question_turn = "player2"
       document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;
   }
   else
   {
       question_turn = "player1"
       document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
   }
 
   if(answer_turn == "player1")
   {
       answer_turn = "player2"
       document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;
   }
   else
   {
       answer_turn = "player1"
       document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name ;
   }
 
   document.getElementById("output").innerHTML = "";