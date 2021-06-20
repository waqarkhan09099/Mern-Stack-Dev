const video=document.getElementById('video');
const play=document.getElementById('play');
const Stop=document.getElementById('stop');
const progress=document.getElementById('progress');
const timestamp=document.getElementById('timestamp');


// function lists
// 1- this fuction is for we do video play and pause
togglevideo=()=>{
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}

// 2- this function is use to make pause button
toggelbtn=()=>{
    if(video.paused){
        play.innerHTML='<i class="fas fa-play fa-2x" ></i>';
    }else{
        play.innerHTML='<i class="fas fa-pause fa-2x" ></i>';
    }
}


// 3- this function is work for stop the video
stopvideo=()=>{
    video.pause();
    video.currentTime=0;
}

// 4- THIS IS FOR PROGRESS UPDATE
timeprogressbar=()=>{
    progress.value=video.currentTime/video.duration*100;
}

// 5- this use to icon change
icontoggel=()=>{
    if(video.paused){
        video.play();
        innerHTML='<i class="fas fa-pause fa-2x" ></i>';
    }
    else{
        video.pause();
        innerHTML='<i class="fas fa-play fa-2x" ></i>';
    }
}

timecalculate=()=>{
    video.currentTime=progress.value/video.duration*100;
    let minutes=Math.floor(video.currentTime/60);
    if (minutes<10){
        minutes=`0${minutes}`;
    }

    let seconds=Math.floor(video.currentTime%60);
    if(seconds<10){
        seconds=`0${seconds}`;
    }

    timestamp.innerHTML=`${minutes}:${seconds}`;
}

// Event Listner :

// 1- when we click on video it will be start and pause toggel
video.addEventListener('click',togglevideo);

// 2- when we click on video it will toggle to pause button and video will be pause
video.addEventListener('pause',toggelbtn);

// 3- when we click on pause button it will toggle to pause button and video will be start
video.addEventListener('play',toggelbtn);

// 4- then we can click on stop btn then video will be stop  and start form 0 currentduration
Stop.addEventListener('click',stopvideo);

// 5- play button toggrl icon.
play.addEventListener('click',icontoggel);

// 6- progress bar calculate the video duration
video.addEventListener('timeupdate',timeprogressbar);

// 7- progress bar change anypoint to move forward in video

progress.addEventListener('change',timecalculate);