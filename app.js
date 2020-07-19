// JavaScript Document
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const resetButton = document.querySelector('.btn__reset');
let missedGuesses = 0;
const overlay = document.getElementById('overlay');
const phraseArray = ['books',
					 'fan',
					 'hat',
					 'computer',
					 'bicycle'
					];

resetButton.addEventListener('click', () => {
	overlay.style.display = 'none';
	
});

function getRandomPhraseAsArray(phrase) {
	//A function that captures a rondom phrase in the phraseArray.
	
}