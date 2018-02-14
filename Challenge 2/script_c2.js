////////////////////////////////////////////////
//  CODING CHALLENGE 2
//
/*
1. Create an array with some years where person were born.
2. Create an empty array (just[]).
3. Use a loop to fill the array with the ages of the person.
4. Use another loop to log into the console wheter each
person is of full age (18 or older), as well as their age.
5. Finally, create a function called printfullAge which receives the vector
of years as an argument, executes the step 2., 3. and 4. and returns a vector
of true/false boolean values: true if the person is of full
age (>= 18 years) and false if not (<18 years).
6. Call the function with two different vectors and store
the results in two variables: full_1 and full_2.

Example input: [1965, 2008, 1992]
Example output: [true, false, true]

Hint: you can use a loop not only to read from
an array, like y[i], but also to set values in
an array, like y[i] = ... You can also use the
specific array methods.
*/

var years = [1985, 1999, 2002, 1972, 2005];
var years2 = [2010, 1995, 1978, 2001,1945, 2008];

function printfullAge (years){
    var arrayAge = [];
    var fullAge = [];
    for (var i = 0; i < years.length; i++) {
        var age = 2018 - years[i];
        console.log('Person ' + (i+1) + ' has ' + age + '.');
        arrayAge.push(age);
    }
    
    for (var i = 0; i < arrayAge.length; i++) {
        if (arrayAge[i]>=18) {
            fullAge.push(true);
        }
        else {
            fullAge.push(false);
        }
    }

    return fullAge;
}

var full_1 = printfullAge(years);
var full_2 = printfullAge(years2);

console.log(full_1);
console.log(full_2);