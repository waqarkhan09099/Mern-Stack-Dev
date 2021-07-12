const title = document.getElementById('title');
const image = document.getElementById('img');
const audio = document.getElementById('audio');
const undo = document.getElementById('undo');
const volumn = document.getElementById('volume');
const prev = document.getElementById('backward');
const play = document.getElementById('play');
const next = document.getElementById('forward');
const random = document.getElementById('shuffle');
const musicList = document.getElementById('listArrow');
const music_disc_contianer = document.getElementById('music-disc-contianer');
const disc_container = document.getElementById('disc-container');
const progressContainer = document.getElementById('progress-bar-container');
const progress = document.getElementById('progress');
const list=document.getElementById('list');
const listheader=document.getElementById('listheader');


const listofmusic = [
    "Titanic - My Heart Will Go On",
    "TheFatRat - Monody",
    "Imagine Dragons - Bad Liar",
    "Cheerleader",
    "Astronomia",
    "Ampyx - Rise",
    "Dirilis Ertugrul",
    "Kurulus Osman",
    "Pirates of the Caribbean",
    "The Dark Knight"

]

let defaultindex = parseInt(Math.random() * listofmusic.length);



soundinitial = (song) => {
    title.innerText = song;
    image.src = `./images/${song}.jpg`;
    audio.src = `./audio/${song}.mp3`;
}

// soundinitial(listofmusic[defaultindex]);

function audiopause() {
    // title.innerText=listofmusic[defaultindex];
    music_disc_contianer.classList.remove('show');
    disc_container.classList.remove('show');
    play.querySelector('i.fas').classList.remove('fa-pause');
    play.querySelector('i.fas').classList.add('fa-play');
    audio.pause();
}
function audioplay() {
    // title.innerText=listofmusic[defaultindex];
    music_disc_contianer.classList.add('show');
    disc_container.classList.add('show');
    play.querySelector('i.fas').classList.remove('fa-play');
    play.querySelector('i.fas').classList.add('fa-pause');
    audio.play();
    // if(audio.duration===audio.duration){
    //     audio.pause();
    //     play.querySelector('i.fas').classList.remove('fa-pause');
    //     play.querySelector('i.fas').classList.add('fa-play');
    // }
}
prevfunc = () => {

    if (defaultindex === defaultindex) {
        defaultindex--;
    }
    soundinitial(listofmusic[defaultindex]);
    // if(true){
    //     audiopause();
    // }
    audioplay();
}

nextfunc = () => {
    if (defaultindex === defaultindex) {
        defaultindex++;
    }
    soundinitial(listofmusic[defaultindex]);
    // if(true){
    //     audiopause();
    // }
    audioplay();
}

shuffleMusic = () => {
    defaultindex = parseInt(Math.random() * listofmusic.length);
    soundinitial(listofmusic[defaultindex]);
    audioplay();
}

updateProgress = (e) => {
    let { currentTime, duration } = e.srcElement;
    let percentagevalue = (currentTime / duration) * 100;
    progress.style.width = `${percentagevalue}%`;
}

setProgress = (e) => {
    const width = this.clientWidth;
    const offsetX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (offsetX / width) * duration;
}

undomusic = () => {
    audio.currentTime = 0;
    audio.play();
}

volumeset = () => {
    if (audio.volume <= 1 && audio.volume >= 0.5) {
        volumn.querySelector('i.fas').classList.remove('fa-volume-up');
        volumn.querySelector('i.fas').classList.add('fa-volume-down');
        audio.volume = 0.1; 
    }
    else if (audio.volume == 0.1) {
        volumn.querySelector('i.fas').classList.remove('fa-volume-down');
        volumn.querySelector('i.fas').classList.add('fa-volume-mute');
        audio.volume = 0;
    }
    else if (audio.volume == 0) {
        volumn.querySelector('i.fas').classList.remove('fa-volume-mute');
        volumn.querySelector('i.fas').classList.add('fa-volume-up');
        audio.volume = 1;
    }
}

play.addEventListener('click', () => {
    const playMusic = music_disc_contianer.classList.contains('show');
    if (playMusic) {
        audiopause();
    }
    else {
        audioplay();
    }
})




prev.addEventListener('click', prevfunc);
next.addEventListener('click', nextfunc);
random.addEventListener('click', shuffleMusic);
audio.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', setProgress);
undo.addEventListener('click', undomusic);
volumn.addEventListener('click', volumeset);
musicList.addEventListener('click',showlist=()=>{
    list.style.display='block';
    listheader.parentElement.style.display='block';
    window.scrollBy(0, 600);
});

soundinitial(listofmusic[defaultindex]);