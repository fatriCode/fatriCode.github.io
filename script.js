function clg(...p) { console.log(...p)};


const gridEl1 = document.querySelector('.player1grid');
const gridEl2 = document.querySelector('.player2grid');



const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'white'];
let pattern = new Array(); 

function randomizePattern(){
    clg('random func called');
    for (let i=0; i<9; i++){   pattern[i] = Math.floor(Math.random() * 6) ;   }
    if (!checkFourColorMax(pattern)) randomizePattern();
    
}

function checkFourColorMax(p1){
    let zeros=0, ones=0, twos=0, threes=0, fours=0, fives=0;
    for (let i=0; i<9; i++) {
        if (p1[i]===0) zeros++;    if (p1[i]===1) ones++;     if (p1[i]===2) twos++; 
        if (p1[i]===3) threes++;    if (p1[i]===4) fours++;     if (p1[i]===5) fives++; 
    }
    
        clg(zeros, ones, twos, threes, fours, fives) ;
    if (zeros > 4 || ones > 4 || twos>4 || threes>4 || fours>4 || fives>4) { clg('it happened'); return false}
    else return true; 


}
randomizePattern(); 

//clg(pattern)
//clg( checkFourColorMax(pattern))


for (let i=0; i<9; i++){
    let newEl = document.createElement('div');
    newEl.classList.add('box');
    
    newEl.style.backgroundColor = colors[pattern[i]];
    gridEl1.appendChild(newEl);
}

for (let i=8; i>=0; i--){
    let newEl = document.createElement('div');
    newEl.classList.add('box');
    newEl.style.backgroundColor = colors[pattern[i]];
    gridEl2.appendChild(newEl);
}

