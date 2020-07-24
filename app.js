// // JavaScript Document
// const qwerty = document.getElementById('qwerty');
// const phrase = document.getElementById('phrase');
// const resetButton = document.querySelector('.btn__reset');
// let missedGuesses = 0;
// const overlay = document.getElementById('overlay');
// const phraseArray = ['books',
// 					 'fans',
// 					 'hats',
// 					 'computer',
// 					 'bicycle'
// 					];
// const splitCharacters = getRandomPhraseAsArray(phraseArray);
// const buttons = document.getElementsByTagName('button');
// const life = document.querySelector('ol');

// resetButton.addEventListener('click', () => {
// 	overlay.style.display = 'none';
	
// });

// function getRandomPhraseAsArray(phraseArray) {
// 	//A function that captures a rondom phrase in the phraseArray.
// 	const getRandomNumber = Math.floor(Math.random() * 5);
// 	const randomArray = phraseArray[getRandomNumber];
// 	const splitArray = randomArray.split("");
// 	return splitArray;
// }



// function addPhraseToDisplay(splitCharacters){
// 	const ul = document.querySelector('#phrase');
// 	for(let i = 0; i < splitCharacters.length; i++){
// 		let li = document.createElement('li');
// 		li.textContent = `${splitCharacters[i]}`;
// 		 ul.appendChild(li);
// 		if( splitCharacters[i] != -1 ){
// 			 li.className = 'letter';
// 			} 
				
			
		
// 	}
	
// }
// function checkLetter(button) {
// 	let letters = document.querySelectorAll('.letter')
// 	let match = null;
// 	for(let i = 0; i <  letters.length; i++){
// 		if(button.textContent === letters[i].textContent){
// 		letters[i].className = 'show';
// 		match += 1;	
// 		return match;
// 	} else 
// 		return null;
		
// 		}

// }





// function checkWin(){
// const letter = document.querySelectorAll('.letter');
// const show = document.querySelectorAll('.show');
// 	if(letter.length === show.length){
// 	overlay.className = 'win';
// 	document.querySelector('.win').innerHTML = `<h1>Congratulations</h1><br>
// 	<h2>You Won!!</h2>`;
// 	overlay.style.display = 'flex';
// } else if(missedGuesses > 4){
// 	overlay.className = 'lose';
// 	document.querySelector('.lose').innerHTML = `<h1>Game Over</h1><br>`
// }
// }




// addPhraseToDisplay(splitCharacters);

// qwerty.addEventListener('click', (event) => {
// 	if (event.target.tagName != 'BUTTON' ) {
// 		return null
// 		}  else if (event.target.tagName === 'BUTTON') {
// 		const button = event.target;
// 		button.className += 'chosen';
		
// 		let letterFound = checkLetter(button);
// 			if(letterFound === null){
// 			   life.removeChild(life.firstElementChild);
// 			   missedGuesses += 1;
// 			  return missedGuesses;
// 			   } 
// 			   checkWin();
// 			   }
			 
			   
// });



const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const resetButton = document.querySelector('.btn__reset');
let missedGuesses = 0;
const phrases = ['pie', 'granola', 'chips', 'coke', 'coffee'];

resetButton.addEventListener('click', () => {
	const start = document.querySelector('#overlay');
	start.style.display = 'none';
});