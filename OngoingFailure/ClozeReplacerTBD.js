exports.ClozeReplacer = function(text, cloze) {
	var textToLower = text.toLowerCase();
	var clozeToLower = cloze.toLowerCase();

	if (!textToLower.includes(clozeToLower)) {
		console.log("Error: cloze deletion text does not appear in the input text");
		return;
	}

	this.full = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, '...');
}