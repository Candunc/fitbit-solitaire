/* Returns a shuffled card deck when Deck() is called
 * For 'Card', 1 = Ace, 11 = Jack, 12 = Queen, 13 = King.
 * For 'Suit', 0 = Spades, 1 = Heart, 2 = Club, 3 = Diamond
 */

import { Random } from "./random";

let rng = new Random();

function random_num() {
	return Math.floor(rng.random()*52);
}

function shuffle(deck) {
	// "Inside Out" Fisher-Yates shuffle
	// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_%22inside-out%22_algorithm
	let a = {suit: 1, card: 1};
	let j = 0;
	for (var i = 0; i < 52; i++) {
		j = random_num();
		if (j != i) {
			a = deck[i];
			deck[i] = deck[j];
			deck[j] = a;
		}
	}
	
	return deck;
}

export function Deck() {
	let deck = [];
	let i = 0;
	for (let s = 0; s < 4; s++) {
		for (let c = 1; c <= 13; c++) {
			deck[i++] = {suit: s, num: c};
		}
	}
	
	return shuffle(deck);
}
