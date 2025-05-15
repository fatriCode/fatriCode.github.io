

function clg(...p1){console.log(...p1)};

const winDialogEl = document.querySelector('dialog')
const winDialogCloseBtn = document.querySelector('dialog > button');

const gameTable = document.getElementById('cntnr');

const b0 = document.getElementById('b0');
const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');
const b4 = document.getElementById('b4');

const b5 = document.getElementById('b5');
const b6 = document.getElementById('b6');
const b7 = document.getElementById('b7');
const b8 = document.getElementById('b8');
const b9 = document.getElementById('b9');

const b10= document.getElementById('b10');
const b11= document.getElementById('b11');
const b12= document.getElementById('b12');
const b13= document.getElementById('b13');
const b14= document.getElementById('b14');

const b15= document.getElementById('b15');
const b16= document.getElementById('b16');
const b17= document.getElementById('b17');
const b18= document.getElementById('b18');
const b19= document.getElementById('b19');

const b20= document.getElementById('b20');
const b21= document.getElementById('b21');
const b22= document.getElementById('b22');
const b23= document.getElementById('b23');
const b24= document.getElementById('b24');

const g0 = document.getElementById('g0');
const g1 = document.getElementById('g1');
const g2 = document.getElementById('g2');

const g3 = document.getElementById('g3');
const g4 = document.getElementById('g4');
const g5 = document.getElementById('g5');

const g6 = document.getElementById('g6');
const g7 = document.getElementById('g7');
const g8 = document.getElementById('g8');

const movesEl = document.getElementById('moves');
const timerEl = document.getElementById('timer');

const newGameBtn = document.getElementById('newGameBtn');
const resetBoardBtn = document.getElementById('resetBoardBtn');


function randomizeGoalArray(){
  for (i=0;i<9;i++){goalArray[i]=Math.floor(Math.random()*6)}
  if (goalArray.filter((el)=>el===0).length > 4) {clg("zeros"); randomizeGoalArray()}
  else if (goalArray.filter((el)=>el===1).length > 4) {clg("ones");randomizeGoalArray()}
  else if (goalArray.filter((el)=>el===2).length > 4) {clg("twos");randomizeGoalArray()}
  else if (goalArray.filter((el)=>el===3).length > 4) {clg("threes");randomizeGoalArray()}
  else if (goalArray.filter((el)=>el===4).length > 4) {clg("fours");randomizeGoalArray()}
  else if (goalArray.filter((el)=>el===5).length > 4) {clg("fives");randomizeGoalArray()}
}
function drawGoalArray(){
  for (i=0; i<9; i++) { goalTable[i].style.backgroundColor = colorArray[goalArray[i]];}
}

function checkForWin(){
  let masterTableIndex;
  let matches=0;

  for (i=0;  i<9;  i++) {
    masterTableIndex = i<3 ? i+6 : i<6 ? i+8 : i+10;

    if ((goalArray[i] === 0) && redEls.has(masterTable[masterTableIndex]))  matches++;
    else if ((goalArray[i] === 1) && orangeEls.has(masterTable[masterTableIndex])) matches++; 
    else if ((goalArray[i] === 2) && yellowEls.has(masterTable[masterTableIndex]))  matches++;
    else if ((goalArray[i] === 3) && greenEls.has(masterTable[masterTableIndex])) matches++ ;
    else if ((goalArray[i] === 4) && blueEls.has(masterTable[masterTableIndex]))  matches++;
    else if ((goalArray[i] === 5) && whiteEls.has(masterTable[masterTableIndex]))  matches++ ;
  }
  if (matches === 9) endGame();
}


function startGame(){
  
  gameStarted =false;
  numOfMoves = 0;
  randomizeGoalArray(); 
  drawGoalArray();
  movesEl.innerText = String(numOfMoves);
  
  timerEl.innerText = "00:00"; 
  clearInterval(intervalTimer);
}

function startTimer(){
  startTime = Date.now();
  
  intervalTimer = setInterval( ()=>{
    const currentTime = Date.now();
    let minuteString, secondString;    
    
    let elapsedTime = (currentTime - startTime)/1000;
    let elapsedMinutes = Math.floor(elapsedTime/60);
    let elapsedSeconds = Math.floor(elapsedTime%60);
    clg(Math.floor(elapsedTime), elapsedMinutes, elapsedSeconds);
    
    if (intervalTimer < 3600) {
    minuteString = elapsedMinutes>9 ? String(elapsedMinutes) : "0" + String(elapsedMinutes);
    secondString = elapsedSeconds>9 ? String(elapsedSeconds) : "0" + String(elapsedSeconds);
    } else {
      minuteString= "59"
      secondString = "59"
    }
    timerEl.innerText = minuteString + ":" +secondString;
  } ,1000) 
}

function endGame(){
  gameStarted = false;
  clearInterval(intervalTimer);
  
  setTimeout(()=>{
    winDialogEl.showModal();
    
  },500);
}

function resetTable(){
  for (i=0;i<25;i++){masterTable[i] = initialMasterTable[i];}
  for (const i in hole) {hole[i] = initialHole[i]};
  for (const i in clicked) {clicked[i] = initialClicked[i]};
  
  redraw();  
}


let redEls = new Set();       redEls.add(b1).add(b2).add(b3).add(b4);
let orangeEls = new Set();    orangeEls.add(b6).add(b7).add(b8).add(b9);
let yellowEls = new Set();    yellowEls.add(b11).add(b12).add(b13).add(b14);
let greenEls = new Set();     greenEls.add(b16).add(b17).add(b18).add(b19);
let blueEls = new Set();      blueEls.add(b21).add(b22).add(b23).add(b24);
let whiteEls = new Set();     whiteEls.add(b5).add(b10).add(b15).add(b20);

const initialMasterTable = [b0,b1,b2,b3,b4,  b5,b6,b7,b8,b9,  b10,b11,b12,b13,b14,  b15,b16,b17,b18,b19,   b20,b21,b22,b23,b24];
const initialHole = {pos: 0, col:0, row:0}; 
const initialClicked = {pos:9, col:9, row:9}; 


const masterTable = [b0,b1,b2,b3,b4,  b5,b6,b7,b8,b9,  b10,b11,b12,b13,b14,  b15,b16,b17,b18,b19,   b20,b21,b22,b23,b24];
const hole = {pos: 0, col:0, row:0}; 
const clicked = {pos:9, col:9, row:9}; 


const goalTable = [g0,g1,g2, g3,g4,g5, g6,g7,g8];
const colorArray = ['red', 'orange', 'yellow', 'green', 'blue', 'white' ];
const goalArray = [0,0,0, 0,0,0, 0,0,0];

let gameStarted = false;
let numOfMoves = 0;
let intervalTimer;
let startTime;

randomizeGoalArray();
drawGoalArray();

gameTable.addEventListener('click', (e)=>{

  if (!gameStarted) {
    gameStarted = true; 
    startTimer();
  }
  
  updateClicked(e.target);
  
  if ((clicked.pos != hole.pos) && (clicked.col === hole.col)) {
    numOfMoves++;   
    updateMoves();
    let steps = Math.abs((clicked.pos - hole.pos)/5);
    if (clicked.pos > hole.pos) { 
      for (i=0; i<steps; i++) { masterTable[hole.pos + (i*5)] = masterTable[hole.pos+((i+1)*5)]}
    }
    if (clicked.pos < hole.pos) { 
      for (i=0; i<steps; i++) { masterTable[hole.pos - (i*5)] = masterTable[hole.pos-((i+1)*5)]}
    }
    
    masterTable[clicked.pos] = b0;
    hole.pos = clicked.pos;  
    hole.col = clicked.col;
    hole.row = clicked.row;
    redraw();
    checkForWin();
  }
  
  if ((clicked.pos != hole.pos) && (clicked.row === hole.row)) {
    numOfMoves++;    
    updateMoves();
    let steps = Math.abs(clicked.pos - hole.pos);
    
    if (clicked.pos > hole.pos) { 
      for (i=0; i<steps; i++) { masterTable[hole.pos + i] = masterTable[hole.pos+i+1]}
    }
    if (clicked.pos < hole.pos) { 
      for (i=0; i<steps; i++) { masterTable[hole.pos - i] = masterTable[hole.pos-i-1]}
    }
    
    masterTable[clicked.pos] = b0;
    hole.pos = clicked.pos;  
    hole.col = clicked.col;
    hole.row = clicked.row;
    redraw();
    checkForWin();
   }

});  // END Of addeventlistener to "gameTable"


resetBoardBtn.addEventListener('click', e=>resetTable());
newGameBtn.addEventListener('click', startGame);
winDialogCloseBtn.addEventListener('click', ()=>winDialogEl.close());

function updateMoves(){
  movesEl.innerText = String(numOfMoves);

}
function updateClicked(p1){
  const boxClicked = masterTable.indexOf(p1);
  clg('boxclicked',boxClicked)
  clicked.pos = boxClicked;
  clicked.col = boxClicked%5;
  clicked.row = boxClicked <5 ? 0 : boxClicked <10 ? 1 : boxClicked <15 ? 2 : boxClicked <20 ? 3 : 4; 
  
}

function redraw(){
  gameTable.innerHTML = '';
  
  for (i=0; i<25; i++){
    // if ( ((i>5)&&(i<9)) || ((i>10)&&(i<14)) || ((i>15)&&(i<19)) ) {masterTable[i].style.opacity=1;}
    // else {masterTable[i].style.opacity=0.9;}
  
    masterTable[i].style.border = "2px solid aqua";
    if ( (i>0) && (i<4) ) {masterTable[i].style.borderBottom = "4px solid black"; }
    if ( (i>20) && (i<24) ) {masterTable[i].style.borderTop = "4px solid black"; }
    if ( (i===5) || (i===10) || (i===15) ) {masterTable[i].style.borderRight = "4px solid black"; }
    if ( (i===9) || (i===14) || (i===19) ) {masterTable[i].style.borderLeft = "4px solid black"; }
  
    gameTable.appendChild(masterTable[i]);
  }
}

redraw();





