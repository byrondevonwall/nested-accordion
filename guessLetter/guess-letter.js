// Tackle this classic GirlDevelopIt! challenge:
//
// You'll create a word guessing game where the user gets infinite tries to guess the word (like Wheel of Fortune without the wheel and fortune).
//
// Create two arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '', '', '_' and end with 'F', 'O', 'X').
//
// Write a function called guessLetter that will: Take one argument, the guessed letter. Iterate through the word letters and see if the guessed letter is in there. If the guessed letter matches a word letter, change the guessed letters array to reflect that. When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
//
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
//
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
//
// Bonus: Make it more like Wheel of Fortune: Start with a reward amount of $0 Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward. When they guess the word, log their final reward amount.

var word = ["c", "a", "t", "s"];
var userLetters = ["_", "_", "_", "_"];


// Write a function called guessLetter that will: Take one argument, the guessed letter. Iterate through the word letters and see if the guessed letter is in there.
function guessLetter(guess){
  if (guess.length != 1){
    console.log("Please guess a single letter!");
  }
  for (g = 0; g < word.length; g++){
    if (word[g] === guess){
      //If the guessed letter matches a word letter, change the guessed letters array to reflect that.
      userLetters[g] = guess;
     //When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
      console.log("congratulations!  you've found a new letter: " + userLetters[g] + "!");
    }
    }
  }
    // It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
  if (word == userLetters){
    console.log("Congratulations, you've guessd the word, " + userLetters + " and won the game!");
  }
  else(
    console.log("There are still more letters to guess, try again!")
  )
guessLetter("a");
guessLetter("d");
guessLetter("x");
guessLetter("b");
guessLetter("g");
guessLetter("c");

guessLetter("t");
guessLetter("s");
console.log(userLetters);
console.log(word);
