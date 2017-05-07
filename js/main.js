
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

//2. Now that we have our card objects, we'll want to update lines of code where we were accessing values from the cards array to reflect these changes.

// In the flipCard function, find this console.log statement: console.log("User flipped " + cards[cardId]);
// Update the portion cards[cardId]. Right now, this code is accessing the entire first object in the cards array. You'll want to update this code so that we are accessing the rank property of this object.
// Hint: We'll give you this one, and you can use this as a reference for the next two steps. Update this to cards[cardId].rank.

// Next update the cards[cardId] portion of cardsInPlay.push(cards[cardId]);. You'll want to push the name of the card ("queen" or "king") to the cardsInPlay array.
// Hint: You'll want to use the rank property like we did in the last step.

// Now let's add a bit of new code so that we can "see" the cards that are flipped in our console. Add two console.log() statements. One should log the cardImage and the other should log the suit for the flipped card.
//Next update the cards[cardId] portion of cardsInPlay.push(cards[cardId]);. 
//You'll want to push the name of the card ("queen" or "king") to the cardsInPlay array.
//Hint: You'll want to use the rank property like we did in the last step.


var cardsInPlay =[];
var checkForMatch = function() {
	if (cardsInPlay [0] === cardsInPlay [1]) 
	{
       alert ("You found a match!");
	} else {
	   alert ("Sorry, try again.");
	}

}
var flipCard = function(cardId) {
	console.log ("User flipped " + cards[cardId].rank);
	cardsInPlay.push (cards[cardId].rank);
	console.log (cards[cardId].cardImage);
	console.log (cards[cardId].suit);
	checkForMatch();
	};
flipCard(0);
flipCard(2);


//Next update the cards[cardId] portion of cardsInPlay.push(cards[cardId]);. You'll want to push the name of the card ("queen" or "king") to the cardsInPlay array.
//Hint: You'll want to use the rank property like we did in the last step.

