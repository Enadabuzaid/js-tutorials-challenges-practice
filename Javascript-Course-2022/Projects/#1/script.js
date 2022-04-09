'use strict';




/*
document.querySelector('.message').textContent;

document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent= 10;

document.querySelector('.guess').value = 23;
*/



let secretNumber = Math.trunc(Math.random() *20 + 1);
let score = 20;
let heighScore = 0;

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}

// document.querySelector('.number').textContent = secretNumber;


document.querySelector('.check').addEventListener('click', function(){
  const guess = Number( document.querySelector('.guess').value);

    // When there is no input 
    if(!guess){
      displayMessage('⛔ No Number!');

    // When player wins
    } else if (guess == secretNumber){
      displayMessage('🎉 Correct Number!');


      document.querySelector('.number').textContent = secretNumber;

      document.querySelector('body').style.backgroundColor = '#60b347';

      document.querySelector('.number').style.width = '30rem';

      if(score > heighScore){
        heighScore = score;
        document.querySelector('.highscore').textContent  = heighScore;
      }
    // When guss wrong
    }else if(guess !== secretNumber){
      if(score > 1){

      displayMessage(guess > secretNumber ? '📈 too high!' : '📉 too low!');

        score --;
        document.querySelector('.score').textContent= score;
      } else{
        document.querySelector('.message').textContent = '💥 You Lost The Game!';
        document.querySelector('.score').textContent= 0;
      }
    }

});



document.querySelector('.again').addEventListener('click',function(){
  score = 20;
  secretNumber = Math.trunc(Math.random() *20 + 1);

  displayMessage('Start guessing...');


  document.querySelector('.score').textContent= score;
  
  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
  
})

