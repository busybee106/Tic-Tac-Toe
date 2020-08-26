const testArray = [["","",""],
                   ["","",""],
                   ["","",""]];

const Player = (person, symbol) => {
   let icon = symbol;
   let name = person;

   return {icon, name}
};

const gameBoard = document.querySelectorAll(".cell");
console.log(gameBoard)
function display() {
   var count = 0;
   for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
         // gameBoard[count].innerHTML = myArray[i][j];
         gameBoard[count].setAttribute('data-location', `${i}${j}`);
         gameBoard[count].addEventListener("click", addInfo);
         console.log(count);
         count++;
      }
   }
}

function openForm() {
   document.getElementById("myForm").style.display = "block";
   fillBoard();
}

function closeForm() {
   document.getElementById("myForm").style.display = "none";
   if (document.getElementById("player1").value == "" || document.getElementById("player2").value == "") {
      return false;
   }
   openBoard();
}

function fillBoard() {
   for (var i = 0; i < gameBoard.length; i++) {
      gameBoard[i].classList.add("nonclick");
   }
}

function openBoard() {
   for (var i = 0; i < gameBoard.length; i++) {
      gameBoard[i].classList.remove("nonclick");
   }
}

function resetForm() {
   document.getElementById("player1").value = "";
   document.getElementById("player2").value = "";
   location.reload();
}

var turn = 0;
function addInfo() {
   var location = this.getAttribute('data-location');

   var name1 = document.getElementById("player1").value;
   var name2 = document.getElementById("player2").value;

   var player1 = Player(name1, "X");
   var player2  = Player(name2, "O");


   switch(location) {
      case "00":
         testArray[0].splice(0,1,turn);
         // gameBoard[0].innerHTML = "X";

         gameBoard[0].classList.add("nonclick");
         if (turn % 2 === 0) {
            gameBoard[0].innerHTML = player1.icon;
         } else
            gameBoard[0].innerHTML = player2.icon;
         
         break;
      case "01":
         testArray[0].splice(1,1,turn);
         // gameBoard[1].innerHTML = "X";

         gameBoard[1].classList.add("nonclick");
         if (turn % 2 === 0) {
            gameBoard[1].innerHTML = player1.icon;
         } else
            gameBoard[1].innerHTML = player2.icon;
         break;
      case "02":
         testArray[0].splice(2,1,turn);
         // gameBoard[2].innerHTML = "X";
         gameBoard[2].classList.add("nonclick");
         if (turn % 2 === 0) {
            gameBoard[2].innerHTML = player1.icon;
         } else
            gameBoard[2].innerHTML = player2.icon;
         break;
      case "10":
         testArray[1].splice(0,1,turn);
         // gameBoard[3].innerHTML = "X";
         gameBoard[3].classList.add("nonclick");
         if (turn % 2 === 0) {
            gameBoard[3].innerHTML = player1.icon;
         } else
            gameBoard[3].innerHTML = player2.icon;
         break;
      case "11":
         testArray[1].splice(1,1,turn);
         // gameBoard[4].innerHTML = "X";
         gameBoard[4].classList.add("nonclick");
         if (turn % 2 === 0) {
            gameBoard[4].innerHTML = player1.icon;
         } else
            gameBoard[4].innerHTML = player2.icon;
         break;
      case "12":
         testArray[1].splice(2,1,turn);
         // gameBoard[5].innerHTML = "X";
         gameBoard[5].classList.add("nonclick");
         if (turn % 2 === 0) {
            gameBoard[5].innerHTML = player1.icon;
         } else
            gameBoard[5].innerHTML = player2.icon;
         break;
      case "20":
         testArray[2].splice(0,1,turn);
         // gameBoard[6].innerHTML = "X";
         gameBoard[6].classList.add("nonclick");
         if (turn % 2 === 0) {
            gameBoard[6].innerHTML = player1.icon;
         } else
            gameBoard[6].innerHTML = player2.icon;
         break;
      case "21":
         testArray[2].splice(1,1,turn);
         // gameBoard[7].innerHTML = "X";
         gameBoard[7].classList.add("nonclick");
         if (turn % 2 === 0) {
            gameBoard[7].innerHTML = player1.icon;
         } else
            gameBoard[7].innerHTML = player2.icon;
         break;
      case "22":
         testArray[2].splice(2,1,turn);
         // gameBoard[8].innerHTML = "X";
         gameBoard[8].classList.add("nonclick");
         if (turn % 2 === 0) {
            gameBoard[8].innerHTML = player1.icon;
         } else
            gameBoard[8].innerHTML = player2.icon;
         break;
   }

   function checkStatus() {
      //top row
      if (gameBoard[0].innerHTML == gameBoard[1].innerHTML && gameBoard[0].innerHTML == gameBoard[2].innerHTML) {
         if (gameBoard[0].innerHTML == player1.icon) {
            document.getElementById("message").innerHTML = `Congrats ${player1.name}, you won!`;
            fillBoard();
            document.getElementById("replay").style.display = "block";
         } 
         else if (gameBoard[0].innerHTML == player2.icon) {
            document.getElementById("message").innerHTML = `Congrats ${player2.name}, you won!`;
            fillBoard();
            document.getElementById("replay").style.display = "block";
         }
      }
      //middle row
      if (gameBoard[3].innerHTML == gameBoard[4].innerHTML && gameBoard[3].innerHTML == gameBoard[5].innerHTML) {
         if (gameBoard[3].innerHTML == player1.icon) {
            document.getElementById("message").innerHTML = `Congrats ${player1.name}, you won!`;
            fillBoard();
            document.getElementById("replay").style.display = "block";
         } 
         else if (gameBoard[3].innerHTML == player2.icon) {
            document.getElementById("message").innerHTML = `Congrats ${player2.name}, you won!`;
            fillBoard();
            document.getElementById("replay").style.display = "block";
         }
      }
      //bottom row
      if (gameBoard[6].innerHTML == gameBoard[7].innerHTML && gameBoard[6].innerHTML == gameBoard[8].innerHTML) {
         if (gameBoard[6].innerHTML == player1.icon) {
            document.getElementById("message").innerHTML = `Congrats ${player1.name}, you won!`;
            fillBoard();
            document.getElementById("replay").style.display = "block";
         } 
         else if (gameBoard[6].innerHTML == player2.icon) {
            document.getElementById("message").innerHTML = `Congrats ${player2.name}, you won!`;
            fillBoard();
            document.getElementById("replay").style.display = "block";
         }
      }

      //left column
      if (gameBoard[0].innerHTML == gameBoard[3].innerHTML && gameBoard[0].innerHTML == gameBoard[6].innerHTML) {
         if (gameBoard[0].innerHTML == player1.icon) {
            document.getElementById("message").innerHTML = `Congrats ${player1.name}, you won!`;
            fillBoard();
            document.getElementById("replay").style.display = "block";
         } 
         else if (gameBoard[0].innerHTML == player2.icon) {
            document.getElementById("message").innerHTML = `Congrats ${player2.name}, you won!`;
            fillBoard();
            document.getElementById("replay").style.display = "block";
         }
      }
      //middle column
      if (gameBoard[1].innerHTML == gameBoard[4].innerHTML && gameBoard[1].innerHTML == gameBoard[7].innerHTML) {
         if (gameBoard[1].innerHTML == player1.icon) {
            document.getElementById("message").innerHTML = `Congrats ${player1.name}, you won!`;
            fillBoard();
            document.getElementById("replay").style.display = "block";
         } 
         else if (gameBoard[1].innerHTML == player2.icon) {
            document.getElementById("message").innerHTML = `Congrats ${player2.name}, you won!`;
            fillBoard();
            document.getElementById("replay").style.display = "block";
         }
      }
      //right column
      if (gameBoard[2].innerHTML == gameBoard[5].innerHTML && gameBoard[2].innerHTML == gameBoard[8].innerHTML) {
         if (gameBoard[2].innerHTML == player1.icon) {
            document.getElementById("message").innerHTML = `Congrats ${player1.name}, you won!`;
            fillBoard();
            document.getElementById("replay").style.display = "block";
         } 
         else if (gameBoard[2].innerHTML == player2.icon) {
            document.getElementById("message").innerHTML = `Congrats ${player2.name}, you won!`;
            fillBoard();
            document.getElementById("replay").style.display = "block";
         }
      }
      //top left to bottom right
      if (gameBoard[0].innerHTML == gameBoard[4].innerHTML && gameBoard[0].innerHTML == gameBoard[8].innerHTML) {
         if (gameBoard[0].innerHTML == player1.icon) {
            document.getElementById("message").innerHTML = `Congrats ${player1.name}, you won!`;
            fillBoard();
            document.getElementById("replay").style.display = "block";
         } 
         else if (gameBoard[0].innerHTML == player2.icon) {
            document.getElementById("message").innerHTML = `Congrats ${player2.name}, you won!`;
            fillBoard();
            document.getElementById("replay").style.display = "block";
         }
      }
      
      //bottom left to top right
      if (gameBoard[6].innerHTML == gameBoard[4].innerHTML && gameBoard[6].innerHTML == gameBoard[2].innerHTML) {
         if (gameBoard[6].innerHTML == player1.icon) {
            document.getElementById("message").innerHTML = `Congrats ${player1.name}, you won!`;
            fillBoard();
            document.getElementById("replay").style.display = "block";
         } 
         else if (gameBoard[6].innerHTML == player2.icon) {
            document.getElementById("message").innerHTML = `Congrats ${player2.name}, you won!`;
            fillBoard();
            document.getElementById("replay").style.display = "block";
         }
      }
   }

   turn++;
   console.log(testArray);
   console.log(turn);
   checkStatus();

   if (turn == 9) {
      document.getElementById("message").innerHTML = `Tie game!`;
      document.getElementById("replay").style.display = "block";
   }
}
display();