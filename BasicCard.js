var BasicCreate = require("./BasicCreate");
var inquirer = require("inquirer");

var BasicCard = function() {
	this.cardDeck = [];
	this.addCard = function(x, y) {
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
			console.log(this.cardDeck);
			this.addCard = function(x,y){
				this.cardDeck.push(new BasicCreate(x,y));
					console.log("\nCard Added!");
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
							console.log("\nStack of cards complete! You have " + cardDeck.length + " flashcard(s).\n")
						} else {
							console.log("\nI'll take that as a no. Stack of cards complete! You have " + cardDeck.length + " flashcard(s).\n")
						}

					});
			}
		});
	}

}

module.exports = BasicCard;