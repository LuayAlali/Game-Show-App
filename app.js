// JavaScript Document
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const resetButton = document.querySelector('.btn__reset');
let missedGuesses = 0;
const overlay = document.getElementById('overlay');
const phraseArray = ['books',
					 'fans',
					 'hats',
					 'computer',
					 'bicycle'
					];
const splitCharacters = getRandomPhraseAsArray(phraseArray);
const buttons = document.getElementsByTagName('button');
const life = document.querySelector('ol');

resetButton.addEventListener('click', () => {
	overlay.style.display = 'none';
	
});

function getRandomPhraseAsArray(phrases) {
	//A function that captures a rondom phrase in the phraseArray.
	const getRandomNumber = Math.floor(Math.random() * 5 );
	const randomArray = phrases[getRandomNumber];
	const splitArray = randomArray.split("");
	return splitArray;
}



function addPhraseToDisplay(character){
	const ul = document.querySelector('#phrase');
	for(let i = 0; i < character.length; i++){
		let li = document.createElement('li');
		li.textContent = `${character[i]}`;
		 ul.appendChild(li);
		if( character[i] != -1 ){
			 li.className = 'letter';
			} 
				
			
		
	}
	
}
function checkLetter(clicked) {
	let letters = document.querySelectorAll('.letter')
	let match = null;
	for(let i = 0; i <  letters.length; i++){
		if(clicked.textContent == letters[i].textContent){
		letters[i].className = 'show';
			match = clicked.textContent;
			return match;
	} else 
		return null;
		
		}

}

qwerty.addEventListener('click', (event) => {
	if (event.target.tagName != 'BUTTON' ) {
		return null
		}  else if (event.target.tagName === 'BUTTON') {
		const button = event.target;
		button.className += 'chosen';
		
		let letterFound = checkLetter(button);
			if(letterFound === null){
			   life.removeChild(life.firstElementChild);
			   missedGuesses += 1;
			   
			   } 
			   }
	
	   
});


addPhraseToDisplay(splitCharacters);



