// Get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButton = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// build out functions
function togglePlay(){
    const method = video.paused ? 'play' : 'pause';
    video[method]();
    // if(video.paused){
    //     video.play();
    // } else {
    //     video.pause();
    // }
}
function updatebttn(){
    const icon = this.paused ? "▶️" : "⏸️";
    console.log(icon)
    toggle.textContent = icon;
}

function skip() {
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
    video[this.name] = this.value;
    console.log(this.value);
    console.log(this.name);
}

function handleProgress(){
    const present = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`
}

//hook up the event listners
video.addEventListener('click',togglePlay);
video.addEventListener('play',updatebttn);
video.addEventListener('pause',updatebttn);
video.addEventListener('timeupdate',handleProgress);
toggle.addEventListener('click',togglePlay);
skipButton.forEach(button => button.addEventListener('click',skip))
ranges.forEach(range => range.addEventListener('change',handleRangeUpdate))
ranges.forEach(range => range.addEventListener('mousemove',handleRangeUpdate))