///////////////////////////////////////////
//  CODING CHALLENGE 1

/*
John and a friend invented a simple game where the player with the highest value of his height (in centimeters) plus five times his age wins (what a silly game :)

1. Create variables for the heights and ages of two friends and assign them some values.
2. Calculate their scores.
3. Decide who wins and print the winner to the console. Include the score in the string that there can be a draw (both players with the same score).


4. EXTRA: Add a third player and now decide who wins. Hint: you will need the && operator to take decision. If you can't solve this one, just watch the solution, it's no problem :)
*/

var nameGamer1, heightnG1, agenG1;
var nameGamer2, heightnG2, agenG2;
var nameGamer3, heightnG3, agenG2;

// Taking datas.

nameGamer1 = prompt('Name user 1?');
heightnG1 = prompt (nameGamer1 + ', How tall are you? (in centimeters)');
agenG1 = prompt ('And your age?');


nameGamer2 = prompt('Name user 2?');
heightnG2 = prompt (nameGamer2 + ', How tall are you? (in centimeters)');
agenG2 = prompt ('And your age?');

nameGamer3 = prompt('Name user 3?');
heightnG3 = prompt (nameGamer3 + ', How tall are you? (in centimeters)');
agenG3 = prompt ('And your age?');

// Calculating scores.

var scoreG1 = heightnG1 + 5 * agenG1;
var scoreG2 = heightnG2 + 5 * agenG2;
var scoreG3 = heightnG3 + 5 * agenG3;

// Search winner and show. 

if (scoreG1 > scoreG2 && scoreG2 >= scoreG3) {
    console.log('Contratulation!, winner is ' + nameGamer1 + '. Score=' + scoreG1);
}
else if (scoreG2 > scoreG1 && scoreG1 >= scoreG3) {
    console.log('Contratulation!, winner is ' + nameGamer2 + '. Score=' + scoreG2);
}
else if (scoreG3 > scoreG2 && scoreG2 >= scoreG1) {
    console.log('Contratulation!, winner is ' + nameGamer3 + '. Score=' + scoreG3);
}
else {
    if (scoreG1 > score3 && scoreG2 === scoreG1)
    console.log('Sorry, this match ends in draw.' + nameGamer1 + ' with score ' + scoreG1 + ' = ' + nameGamer2 + ' with score ' + scoreG2 + '.');

    console.log('Sorry, this match ends in draw.' + nameGamer1 + ' with score ' + scoreG1 + ' = ' + nameGamer2 + ' with score ' + scoreG2 + ' = ' + nameGamer3 + ' with score ' + scoreG3);

}




