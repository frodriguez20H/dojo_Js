/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

/*
1. Constructor: Question. answers and correct answer.
2. Invocar el constructor para crear varias preguntas.
3. Almacenarlas en un array.
4 y 5. Generar una aleatoria y mostrar por Promt
6. Comprobar que es correcta.
7. Generarlo como funcion privada. (Consultar videos).
*/

var QuestionBuilder = function(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

var quest1 = new QuestionBuilder('¿Javascript es un lenguaje de programación?', ['Sí', 'No'], 'Sí');
var quest2 = new QuestionBuilder('¿De qué color es el caballo blanco de Santiago?', ['Trasparente', 'Negro', 'Blanco'], 'Blanco');
var quest3 = new QuestionBuilder('¿Qué pokemon usaría Yune?', ['Charmander', 'Pikachu', 'Saiduck', 'No sé'], 'Saiduck');
var quest4 = new QuestionBuilder('¿Entre tres caminos a elegir, cúal es el más corto?', ['El trayecto', 'El camino','La Línea recta'], 'La Línea recta');
var quest5 = new QuestionBuilder('¿Are you sure need learn Javascript?', ['No', 'Yes', 'I\'m no sure', 'No idea'], 'Yes')

var questions = [quest1, quest2, quest3, quest4, quest5];

(function quest(arrayq){
    var text = '';
    var answers = [];
    var score = 0;
    while (text != 'exit'){
        var postq = Math.floor(Math.random() * 5);  // Random position in array questions.
        answers = arrayq[postq].answers;
        text = arrayq[postq].question + '\n';
        for (var i = 0; i < answers.length; i++){
                text = text + i + ' => ' + answers[i] + '\n';
            }
        text = text + '----------' + '\n' + 'Score: ' + score;
        var answer = prompt(text);
        if (answers[answer] == arrayq[postq].correct) {
            console.log('CORRECTO.');
            alert('¡Correcto!');
            score += 1;
            console.log('Score =' + score);
        } else {
            alert('No es correcto. Intentalo otra vez.');
        }
    }
    console.log('End Game.');
})(questions);

/*
--- Expert level ---
8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)
9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.
10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).
11. Display the score in the console. Use yet another method for this.
*/