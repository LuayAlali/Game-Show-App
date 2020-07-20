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

function getRandomPhraseAsArray(phrases) {
	//A function that captures a rondom phrase in the phraseArray.
	const getRandomNumber = Math.floor(Math.random(5 - phrase.length) + 1);
	const randomArray = phrases[getRandomNumber];
	return randomArray;
}

getRandomPhraseAsArray(phraseArray);

