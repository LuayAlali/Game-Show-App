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
const phrases = ['pie', 'granola', 'chips', 'coke', 'coffee'];//array of phrases


resetButton.addEventListener('click', () => {
	const start = document.querySelector('#overlay');
	start.style.display = 'none';
});

function  getRandomPhraseAsArray (arr) {
	//A function that captures a rondom phrase in the phraseArray.
	const randomNumber =  Math.floor(Math.random() * arr.length);
	const arrayAtRandom= arr[randomNumber];
	const arrayCharacters = arrayAtRandom.split("");
	return arrayCharacters;
}
// const randomArray = phraseArray[getRandomNumber];
// 	const splitArray = randomArray.split("");
// 	return splitArray;

const phraseArray = getRandomPhraseAsArray(phrases);


function addPhraseToDisplay(arr) {
	const ul = document.getElementById('phrase');
	for(let i = 0; i < arr.length; i++){
   let li  = document.createElement('li');
    li.textContent = `${arr[i]}`;
    ul.appendChild(li);
   if(li[i] != -1){
     li.className = 'letter';
   }
	}
}

addPhraseToDisplay(phraseArray);


function checkLetter(button) {

const list = document.querySelectorAll('letter');
let match = null;
for (let i = 0; i < list.length; i++){
	if (button.textContent === list[i].textContent){
		list[i].className = "show";
		match = button.textContent;
	}	else {
		return null;
	}
}
return match;
}

qwerty.addEventListener('click', (e) =>{
	 if (e.target.tagName  != 'BUTTON'){
		 return null;
	 } else {
		 e.target.className = 'chosen';
		 const check = checkLetter(e);
		 if(check === null){
			 const tries = document.querySelector('#scoreboard').firstElementChild.firstElementChild;
			 tries.style.display = 'none';
			 missedGuesses += 1;
		 }
	 }
});
