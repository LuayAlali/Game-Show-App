const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const resetButton = document.querySelector('.btn__reset');
let missedGuesses = 0;
const phrases = ['apple pie', 'corn flakes', 'cheese cake', 'coca cola', ' tea biscuit'];//array of phrases
const restartButton = document.createElement('button');
    restartButton.textContent = 'Play Again';
    restartButton.id = "reset";

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


const phraseArray = getRandomPhraseAsArray(phrases);


function addPhraseToDisplay(arr) {
	const ul = document.getElementById('phrase');
	for(let i = 0; i < arr.length; i++){
   if(arr[i] === " "){
	let li  = document.createElement('li');
    li.textContent = `${arr[i]}`;
	ul.appendChild(li);
	li.className = 'space';
   }else if (arr[i] != -1){
	let li  = document.createElement('li');
    li.textContent = `${arr[i]}`;
	ul.appendChild(li);
	li.className += 'letter';
   }
		
   
   
	}
}

addPhraseToDisplay(phraseArray);


function checkLetter(button) {
	const list = document.querySelectorAll('.letter');
	let match = null;
	for (let i = 0; i < list.length; i++){
		if (button.textContent === list[i].textContent){
			list[i].className += ' show';
			match = button.textContent;
			
		}	
		
	}
	return match;
	}



qwerty.addEventListener('click', (event) =>{
	 if (event.target.tagName  != 'BUTTON'){
		 return null;
	 } else if (event.target.tagName === 'BUTTON') {
		const button = event.target;
		button.className += 'chosen';
		 button.disabled = true;
		 let check = checkLetter(button);
		 if(check === null){
			 const tries = document.querySelector('#scoreboard').firstElementChild;
			 tries.removeChild(tries.firstElementChild);
			 missedGuesses += 1;
		 }
		 
	 }
	 checkWin(event);
});


function checkWin() {
 const letters = document.querySelectorAll('.letter');
 const show = document.querySelectorAll('.show');
 if(show.length === letters.length){
 const win = document.querySelector('#overlay');
 
 setTimeout(()=>{
	win.className = 'win';
	win.style.display = 'flex';
	win.innerHTML = `<h1>WINNER</h1>`;
	win.appendChild(restartButton);
 },1200);

 } else if (missedGuesses >= 5){
	 const lose = document.querySelector('#overlay');
	 setTimeout(()=>{
		lose.className = 'lose';
		lose.style.display = 'flex';
		lose.innerHTML = `<h1>you lose</h1>`;
		lose.appendChild(restartButton);
	 },500);

 } else {
	 null;
 }

}

// Listening to reset button


restartButton.addEventListener('click', (e) => {
    
	e.target;
  if (e.target = resetButton) {
	  location.reload();
   }
});