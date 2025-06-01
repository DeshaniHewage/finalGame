 // Object creation
        let score = JSON.parse(localStorage.getItem('score')) || {
                wins: 0,
                losses: 0,
                ties: 0
            };
        // This will get the score object from local storage, if it exists. If it doesn't exist, it will return null.

        /* if (!score) {
            score = {
                wins: 0,
                losses: 0,
                ties: 0
            };
        } Instead of this we can use || Default Operator. */


            updateScoreElement();


        function playGame(playerMove) {

            const computerMove = pickComputerMove(); // Call the function

            // Now we need to compare the computer's move with the player's move
            result = '';

            if (playerMove === 'scissors') {

                if (computerMove === 'rock') {
                    result = 'You Lose!';
                }
                else if (computerMove === 'paper') {
                    result = 'You win!';
                }
                else if (computerMove === 'scissors') {
                    result = 'Its a tie!';
                }

            }


            else if (playerMove === 'paper') {

                if (computerMove === 'rock') {
                    result = 'You win!';
                }
                else if (computerMove === 'paper') {
                    result = 'Its a tie!';
                }
                else if (computerMove === 'scissors') {
                    result = 'You Lose!';
                }

            }


            else if (playerMove === 'rock') {

                if (computerMove === 'rock') {
                    result = 'Its a tie!';
                }
                else if (computerMove === 'paper') {
                    result = 'You Lose!';
                }
                else if (computerMove === 'scissors') {
                    result = 'You win!';
                }
                
            }

            // Update the score object based on the result
            if (result === 'You win!') {
                score.wins ++;
            }
            else if (result === 'You Lose!') {
                score.losses ++;
            }
            else if (result === 'Its a tie!') {
                score.ties ++;
            }

            // Local storage only support strings (Using local storage we can able to get the value that we saved earlier, eventhough we refresh the page)

            localStorage.setItem('score', JSON.stringify(score)); 
            //This json stringify converts the object into a string so that it can be stored in local storage.
            // localStorage.setItem('name', 'value'); ('name' = This is how we gonna access the value later. 'value' = This is the value we are going to store ) localStorage only support string, so we need to convert value score into a string using JSON.stringify().


            updateScoreElement();

            document.querySelector('.js-result').innerHTML = result;

            document.querySelector('.js-moves').innerHTML = `You
        <img src=" ${playerMove}-emoji.png" class="move-icon">
        <img src=" ${computerMove}-emoji.png" class="move-icon">
        Computer`;

    }
       

        function updateScoreElement () {

            document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
            // This will update the score on the page when the page loads.
        }


// Create function to pick a random move for the computer
        function pickComputerMove () {
            const randomNum = Math.random()
            let computerMove = '';

            if (randomNum >= 0 && randomNum < 1/3) {
                computerMove = 'Rock';
            }
            else if (randomNum >= 1/3 && randomNum < 2/3) {
                computerMove = 'Paper';
            }
            else if (randomNum >= 2/3 && randomNum <1) {
                computerMove = 'Scissors';
            }

            return computerMove; // Return lets us get a value out of a function. after the return statement, the function stops rum imadiately.
            console.log('This will never run'); // This line will never run because it is after the return statement
        }