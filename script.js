const play = document.getElementById("play");
const music = document.querySelector("audio");
const img = document.querySelector("img");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prew = document.getElementById("prev");
const next = document.getElementById("next");
let progress = document.getElementById("progress");
let current_Time = document.getElementById("current_time");
let total_Time = document.getElementById("duration");
const progress_div = document.getElementById("progress_div");

const songs = [{
    name: "Ontop",
    title: "On Top",
    artist: "Karan Aujla",
},
    {
    name: "chorni",
    title: "Chorni",
    artist: "Sidhu moose wala",
},
{
    name: "devil",
    title: "devil",
    artist: "Sidhu moose wala",
},
{
    name: "Devnagari",
    title: "Devnagari",
    artist: "Dakait & Aniket Raturi",
},
{
    name: "dawood",
    title: "Dawood",
    artist: "Sidhu moose wala",
},
{
    name: "dearmama",
    title: "Dear Mama",
    artist: "Sidhu moose wala",
},
]

let isPlaying = false;

// for play functionality

const playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
};

//for pause functionality

const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
};

play.addEventListener("click", () => {
    // if(isPlaying){
    //     pauseMusic();
    // }else{
    //     playMusic();
    // }

    // upper code by ternary operator=>

    isPlaying ? pauseMusic() : playMusic();
});

//changing the music data

const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "Songs/" + songs.name + ".mp3";
    img.src = "images/" + songs.name + ".jpeg";
};

let songIndex = 0;
//for next song
const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);   //calling loadsong
    playMusic();
};
//for previous song
const prewSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

//changing time format second to minutes

function formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    if (sec < 10) sec = "0" + sec;
    return `${min}:${sec}`;
}

//progress js work 
music.addEventListener("timeupdate", (event) => {
    // console.log(event);
    const{currentTime, duration} = event.target;    //destructring syntax 
    let progress_bar = (currentTime / duration) * 100;  //making progress bar dynamic
    progress.style.width = `${progress_bar}%`;          

    //music duration update
    let currTime = formatTime(currentTime);   // calling foramtTime function for changing time format sec to min
    let totalDuration = formatTime(duration);   //calling foramtTime function for changing time format sec to min

    current_Time.textContent = currTime;
    if(duration){        //for total duration loading
        total_Time.textContent = totalDuration;
    }

});

progress_div.addEventListener("click", (event) => {
    const { duration } = music;
    let move_progress = (event.offsetX / event.target.clientWidth) * duration;
    music.currentTime = move_progress;

    // Disable transition temporarily
    progress.style.transition = "none";

    // Update progress width immediately
    let progress_bar = (move_progress / duration) * 100;
    progress.style.width = `${progress_bar}%`;

    // Update current time display immediately
    current_Time.textContent = formatTime(move_progress);

    // Re-enable transition after a tiny delay
    setTimeout(() => {
        progress.style.transition = "width 0.3s linear";
    }, 50);
});


music.addEventListener("ended", nextSong); // for next song after completing current playing song

next.addEventListener("click", nextSong);  //calling nextSong
prew.addEventListener("click", prewSong);  //calling prewSong