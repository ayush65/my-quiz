var variable = require('readline-sync');
const chalk = require('chalk');



var username = variable.question('what is your name ? ');

console.log(chalk.blue("welcome",username,"lets play"));



score = 0;

const warning=chalk.red;
const welcome=chalk.green;
const endgame=chalk.yellow;

function playGAme(question,answer){
  var Userans = variable.question(question);

  if (Userans === answer){
    console.log(welcome('you are right! '));
    score = score+ 1;
  }else{
    console.log(warning('oops! its wrong'));

  }

}

playGAme("What is my name ?  ","ayush");

console.log(welcome("Your Final Score",score));


playGAme("what is my last name ? ","prakash");

console.log(welcome("Your Final Score",score));


var questions = [{
  question : "What Is my age ?  ",
  answer : "20"
},
{
  question : "what is my fav color ?  ",
  answer : "black"
}];


for (var i=0 ; i<questions.length ; i++){

    var currentQues = questions[i];
    playGAme(currentQues.question,currentQues.answer)

}

console.log(welcome("Your Final Score",score));

