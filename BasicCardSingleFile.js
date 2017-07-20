
var inquirer = require("inquirer");

function BasicCard(front, back) {
	this.front = front;
	this.back = back;

};


var allBasicCards = [];


var createBasicCard = function() {

	console.log("\nNew Basic Flashcard\n");
	inquirer.prompt([

		{
			name: "front",
			message: "What question should appear on the front of this flashcard?"
		}, {
			name: "back",
			message: "What answer should appear on the back of this flashcard?"
		}

	]).then(function(answers) {

		var card = new BasicCard(answers.front, answers.back);
		allBasicCards.push(card);
		console.log("\nBasic Flashcard Added!");
		console.log("----------\nFront: " + answers.front);
		console.log("Back: " + answers.back + "\n----------");
		inquirer.prompt([
			{
				name: "another",
				message: "Do you want to create another card? (Enter Y or N)"
			}
		]).then(function(answers){
			if(answers.another === "Y" || answers.another === "y") {
				createBasicCard();
			} else if(answers.another === "N" || answers.another === "n") {
				console.log("\nStack of cards complete! You have " + allBasicCards.length + " flashcard(s).\n")
			} else {
				console.log("\nI'll take that as a no. Stack of cards complete! You have " + allBasicCards.length + " flashcard(s).\n")
			}

		});
	});
};

createBasicCard();
