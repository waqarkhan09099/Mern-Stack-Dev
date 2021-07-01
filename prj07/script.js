const hangman = document.querySelectorAll('.svg-men');
const popup = document.getElementById('winorlose');
const word = document.getElementById('word');
const notification = document.getElementsByClassName('.notification');
const sliderMessage = document.getElementById('slider_message');
const message = document.getElementById('message');


let completeletter = ['a','e','i','o','u'];
let incompleteletter = [];

const wordpool = ['javascript', 'facebook', 'google', 'youtube', 'microsoft'];
let selectedWord = wordpool[Math.floor(Math.random() * wordpool.length)];

function show_notification(){
    sliderMessage.classList.add('show');
    

    setTimeout(()=>{sliderMessage.classList.remove('show'),3000});
}

// wrong letter  update function

function updateWrongLetters(){
    wrongletter.innerHTML=`
    ${incompleteletter<0 ? `<p>Wrong Letter</p>`:""}
    ${incompleteletter.map(letter=>`<span>${letter}</span>`)}
    `
}

// function to display word
function displayselectedword() {
    word.innerHTML = `${selectedWord.split('').map(
        letter => `
            <span class="letter">
                ${completeletter.includes(letter) ? letter : ''}
                
            </span>
        `
        // its show agr hamare complete array me word pool k letter milte hean to use print krde
    )
        .join('')
        // join method is used for array convert into string
        }`;
    const wordtext = word.innerText.replace(/\n/g, '');
    console.log(wordtext);
    console.log(word.innerText);

    if (word === completeletter) {
        message.innerText = 'You Win!';
        popup.style.display = 'flex';
    }

}

window.addEventListener('keydown',e=>{
    if(e.keyCode>=65 && e.keyCode<=90){
        const letter=e.key;
        if(!completeletter.includes(letter)){
            completeletter.push(letter);
            displayselectedword();
        }
        else{
            show_notification();
        }
    }
    else if(!incompleteletter.includes(letter)){
        incompleteletter.push(letter);
        updateWrongLetters();
    }
    
})

updateWrongLetters();

displayselectedword();