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

var QuestionBuilder = ̣function(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

var question1 = "¿Javascript es un lenguaje de programación?";
var answers1 = ['Sí', 'No'];
var correct1 = 'Sí';

var quest1 = new QuestionBuilder(question1, answers1, correct1);

console.log(quest1);