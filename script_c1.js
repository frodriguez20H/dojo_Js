///////////////////////////////////////////
//  CODING CHALLENGE 1

/*
John and a friend invented a simple game where the player with the highest value of his height (in centimeters) plus five times his age wins (what a silly game :)

1. Create variables for the heights and ages of two friends and assign them some values.
2. Calculate their scores.
3. Decide who wins and print the winner to the console. Include the score in the string that there can be a draw (both players with the same score).


4. EXTRA: Add a third player and now decide who wins. Hint: you will need the && operator to take decision. If you can't solve this one, just watch the solution, it's no problem :)
*/

var nameGamer1;
var nameGamer2;

var heightnG1;
var heightnG2;

var agenG1;
var agenG2;

nameGamer1 = prompt('Name user 1?');
heightnG1 = prompt (nameGamer1 + ', How tall are you? (in centimeters)');
agenG1 = prompt ('And your age?');


nameGamer2 = prompt('Name user 2?');
heightnG2 = prompt (nameGamer2 + ', How tall are you? (in centimeters)');
agenG2 = prompt ('And your age?');

var scoreG1 = heightnG1 + 5 * agenG1;
var scoreG2 = heightnG2 + 5 * agenG2;

if (scoreG1 > scoreG2) {
    console.log('Contratulation!, winner is ' + nameGamer1 + '. Score=' + scoreG1);
}
else if (scoreG2 > scoreG1) {
    console.log('Contratulation!, winner is ' + nameGamer2 + '. Score=' + scoreG2);
}
else {
    console.log('Sorry, this match ends in draw.' + scoreG1 + ' = ' + scoreG2);
}




