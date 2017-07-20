var inquirer = require("inquirer");

function ClozeCard(text, cloze) {
	this.text = text;
	this.cloze = cloze;

};

var allClozeCards = [];

var createClozeCard = function() {

	console.log("\nNew Cloze-Replace Flashcard\n");
	inquirer.prompt([

		{
			name: "full",
			message: "What should the full, hidden text of the flashcard be?"
		}, {
			name: "cloze",
			message: "What text would you like to withhold from the visible flashcard?"
		}

	]).then(function(answers) {

		var card = new ClozeCard(answers.full, answers.cloze);
		allClozeCards.push(card);
		console.log("\nCloze-Replace Flashcard Added!");
		console.log("----------\nFront: " + answers.full.replace(answers.cloze, '...'));
		console.log("Back: " + answers.cloze + "\n----------");
		inquirer.prompt([
			{
				name: "another",
				message: "Do you want to create another card? (Enter Y or N)"
			}
		]).then(function(answers){
			if(answers.another === "Y" || answers.another === "y") {
				createClozeCard();
			} else if(answers.another === "N" || answers.another === "n") {
				console.log("\nStack of cards complete! You have " + allClozeCards.length + " cloze-replace flashcard(s).\n");
			} else {
				console.log("\nI'll take that as a no. Stack of cards complete! You have " + allClozeCards.length + " cloze-replace flashcard(s).\n");
			}

		});

	});
};

createClozeCard();