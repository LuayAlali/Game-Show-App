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
const splitCharacters = getRandomPhraseAsArray(phraseArray);


resetButton.addEventListener('click', () => {
	overlay.style.display = 'none';
	
});

function getRandomPhraseAsArray(phrases) {
	//A function that captures a rondom phrase in the phraseArray.
	const getRandomNumber = Math.floor(Math.random(5 - phrases.length) + 1);
	const randomArray = phrases[getRandomNumber];
	const splitArray = randomArray.split("");
	return splitArray;
}



function addPhraseToDisplay(character){
	for(let i = 0; i < character.length; i++){
		let li = document.createElement('li');
		li.textContent = `${character[i]}`;
		const ul = document.querySelector('#phrase');
		 ul.appendChild(li);
		if( character[i] != -1 ){
			 li.className('letter');
			} 
				
			
		
	}
	
}
addPhraseToDisplay(splitCharacters);



