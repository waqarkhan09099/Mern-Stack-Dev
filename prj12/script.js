const start=document.getElementById('startGame');
// const easyMode=document.getElementById('easy');
// const intermediateMode=document.getElementById('intermediate');
// const expertMode=document.getElementById('expert');
const difficulty=document.querySelectorAll('input[name="mode"]');
const type=document.querySelectorAll('input[name="type"]');
const wordType=document.getElementById('word');
const sentenceType=document.getElementById('sentences');
const info=document.getElementById('info');

// info declaration
const infoType=document.getElementById('type');
const level=document.getElementById('level');
const second=document.getElementById('second');
const bonus=document.getElementById('bonus');

const inputrandom=document.getElementById('random');


const gameDatabase = [{difficulty:"Easy", word : { time:15,bonus:5 }, sentence : { time:25,bonus:10 }},{difficulty:"Medium", word : { time:12,bonus:3 }, sentence : { time:20,bonus:5 }},{difficulty:"Hard",word : { time:8,bonus:2 }, sentence : { time:15,bonus:3 }}];

let gametime,gameType,gamediffculty,gameBonus,gamebonus;



propertyupadte=()=>{
    gamediffculty=document.querySelector('input[name="mode"]:checked').value;
    gameType=document.querySelector('input[name="type"]:checked').value;
    gameDatabase.forEach(data=>{
        if(gamediffculty===data.difficulty){
            gametime=(gameType==='word')? data.word.time:data.sentence.time;
            gameBonus=(gameType==='word')? data.word.bonus:data.sentence.bonus;
        }
    })

}

updatedom=()=>{
    propertyupadte();
    level.innerText=gamediffculty;
    second.innerText=gametime+'s';
    infoType.innerText=gameType;
    bonus.innerText='+'+gameBonus;
}
// Functions

updatedom();
// Events listener list
