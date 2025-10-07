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
let volume = document.getElementById("volume");
const playlistImg = document.getElementById("playlistImg");
const playlistDiv = document.getElementById("playlist");
const playlistSongs = document.getElementById("playlistSongs");
const searchInput = document.getElementById("searchInput");

const songs = [
  { songName: "52 Bars - Karan Aujla",  title: "52 bar", artist: "Karan Aujla", img: "karan"},
  { songName: "295",  title: "295", artist: "Sidhu Moose Wala", img: "sidhu"},
  { songName: "bw",  title: "b&w", artist: "Sidhu Moose Wala", img: "sidhu"},
  { songName: "Calaboose__Official_Video__Sidhu_Moose_Wala___Snappy___Moosetape(256k)",  title: "calaboose", artist: "Sidhu Moose Wala", img: "sidhu"},
  { songName: "Unbothered_1", title: "unbothered", artist: "Navaan Sandhu", img: "navaan" },
  { songName: "Case - Diljit Dosanjh", title: "case", artist: "Diljit Dosanjh", img: "diljit" },
  { songName: "chorni", title: "chorni", artist: "Sidhu Moose Wala", img: "sidhu" },
  { songName: "dawood", title: "dawoood", artist: "Sidhu Moose Wala", img: "sidhu" },
  { songName: "Dapper Dan - Navaan Sandhu", title: "dapper don", artist: "navaan sandhu", img: "navaan" },
  { songName: "dearmama", title: "dearmama", artist: "Sidhu Moose Wala", img: "sidhu" },
  { songName: "devil", title: "devil", artist: "Sidhu Moose Wala", img: "sidhu" },
  { songName: "dhakka", title: "dhakka", artist: "Sidhu Moose Wala", img: "sidhu" },
  { songName: "C Walk - Navaan Sandhu", title: "c walk", artist: "Navaan Sandhu", img: "navaan" },
  { songName: "drippy", title: "drippy", artist: "Sidhu Moose Wala", img: "sidhu" },
  { songName: "East_Side_Flow__Lyrical_Video__Sidhu_Moose_Wala___Byg_Byrd___Sunny_Malton___Juke_Dock(256k)", title: "east side flow", artist: "Sidhu Moose Wala", img: "sidhu" },
  { songName: "Black_Life_Original_1", title: "black life", artist: "Navaan Sandhu", img: "navaan" },
  { songName: "EVERYBODY_HURTS___Sidhu_Moose_Wala___Jayb___Official_Visual_Video___New_Song_2022(256k)", title: "everybody hurts", artist: "Sidhu Moose Wala", img: "sidhu" },
  { songName: "Ontop",  title: "On Top", artist: "Karan Aujla", img: "karan"},
  { songName: "G_Shit__Full_Video__Sidhu_Moose_Wala___Blockboi_Twitch___The_Kidd___Sukh_Sanghera___Moosetape(256k)", title: "g shit", artist: "Sidhu Moose Wala", img: "sidhu" },
  { songName: "GAME___Full_Video___Shooter_Kahlon___Sidhu_Moose_Wala___Hunny_PK_Films___Gold_Media___5911_Records(256k)", title: "game", artist: "Sidhu Moose Wala", img: "sidhu" },
  { songName: "goli vajji", title: "goli bajji", artist: "Sidhu Moose Wala", img: "sidhu" },
  { songName: "INVINCIBLE__Official_Audio__Sidhu_Moose_Wala___Stefflon_Don_l_Steel_Bangelz___The_Kidd___Moosetape(256k)", title: "invincible", artist: "Sidhu Moose Wala", img: "sidhu" },
  { songName: "Just_Listen___Official_Music_Video___Sidhu_Moose_Wala_ft._Sunny_Malton___BYG_BYRD___Humble_Music(256k)", title: "just listen", artist: "Sidhu Moose Wala", img: "sidhu" },
  { songName: "Hood_Famous_Navaan_Sandhu", title: "hood famous", artist: "Navaan Sandhu", img: "navaan" },
  { songName: "LEGEND_-_SIDHU_MOOSE_WALA___The_Kidd___Gold_Media___Latest_Punjabi_Songs_2020(256k)", title: "legend", artist: "Sidhu Moose Wala", img: "sidhu" },
  { songName: "LEVELS_-_Official_Video___Sidhu_Moose_Wala_ft_Sunny_Malton___The_Kidd(256k)", title: "level", artist: "Sidhu Moose Wala", img: "sidhu" },
  { songName: "OLD_SKOOL__Full_Video__Prem_Dhillon_ft_Sidhu_Moose_Wala___The_Kidd___Nseeb___Rahul_Chahal__GoldMedia(256k)", title: "old skool", artist: "Sidhu Moose Wala", img: "sidhu" },
  { songName: "My_Prime", title: "my prime", artist: "Navaan Sandhu", img: "navaan" },
  { songName: "Sidhu_Son__Official_Audio__Sidhu_Moose_Wala___The_Kidd___Moosetape(256k)", title: "sidhu son", artist: "Sidhu Moose Wala", img: "sidhu" },
  { songName: "So_High___Official_Music_Video___Sidhu_Moose_Wala_ft._BYG_BYRD___Humble_Music(256k)", title: "so high", artist: "Sidhu Moose Wala", img: "sidhu" },
  { songName: "Plug_Talk_1", title: "Plug talk", artist: "Navaan Sandhu", img: "navaan" },
  { songName: "TIBEYAN_DA_PUTT__Full_Video__Sidhu_Moose_Wala___The_Kidd___Gold_Media___Latest_Punjabi_Song_2020(256k)", title: "tibeyan da putt", artist: "Sidhu Moose Wala", img: "sidhu" },
  { songName: "Sit Down Son - Navaan Sandhu", title: "sit down son", artist: "Navaan Sandhu", img: "navaan" },
];


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
    // music.src = "Songs/" + songs.name + ".mp3";
    // img.src = "images/" + songs.name + ".jpeg";
    music.src = `Songs/${songs.songName}.mp3`;  //by templete literals
    img.src = `images/${songs.img}.png`;  //by templete literals
};

// let songIndex = 0;  //variable for changing song

let songIndex = localStorage.getItem("currentSongIndex") 
                  ? parseInt(localStorage.getItem("currentSongIndex")) 
                  : 0;

// Load last played song on page load
loadSong(songs[songIndex]);

// Set last playback time if saved
const lastTime = localStorage.getItem(`songTime_${songIndex}`);
if (lastTime) {
    music.currentTime = parseFloat(lastTime);
}

//for next song
const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    localStorage.setItem("currentSongIndex", songIndex);
    loadSong(songs[songIndex]);   //calling loadsong
    playMusic();
};
//for previous song
const prewSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    localStorage.setItem("currentSongIndex", songIndex);
    loadSong(songs[songIndex]);
    playMusic();
};

//changing time format => second to minutes

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


let isMuted = false;
const mute = () => {
    isMuted = true;
    music.muted = true;
    volume.classList.replace("fa-volume-high", "fa-volume-xmark");
}
//volume on
const resume = () => {
    isMuted = false;
    music.muted = false;
    volume.classList.replace("fa-volume-xmark", "fa-volume-high");
}

volume.addEventListener("click", () => {
    isMuted? resume() : mute();
})


music.addEventListener("ended", nextSong); // for next song after completing current playing song

next.addEventListener("click", nextSong);  //calling nextSong
prew.addEventListener("click", prewSong);  //calling prewSong



// show all songs dynamically
songs.forEach((song, index) => {
    const list = document.createElement("li");
    list.textContent = `${song.title} - ${song.artist}`;

    list.addEventListener("click", () => {
        let songIndex = index;
        loadSong(songs[songIndex]);  // calling loadSong function for loading content (img,song,etc) of clicked song. 
        playMusic();       // calling playmusic function
        playlistDiv.classList.add("hidden");  //for hiding playlist after playing song
    });
    playlistSongs.appendChild(list);
});

// toggle playlist on click
playlistImg.addEventListener("click", () => {
    playlistDiv.classList.toggle("hidden");
});


// //search song by using for of loop
// searchInput.addEventListener("input", () => {
//     const filter = searchInput.value.toLowerCase(); // user input lowercase
//     const lis = playlistSongs.querySelectorAll("li");  //accessing list of songs
//     for(let li of lis) {    // apply loop 
//         const text = li.textContent.toLowerCase(); // li text lowercase + string song details(song name + artist name)
//         if (text.includes(filter)) {
//             li.style.display = ""; // show
//         } else {
//             li.style.display = "none"; //hide
//         }
//     }
// });



// searching song by foreach loop + and if searched song not found than show no result found

searchInput.addEventListener("input", () => {
    const filter = searchInput.value.toLowerCase(); // user input lowercase
    const lis = playlistSongs.querySelectorAll("li");  // NodeList of <li>
    let hasMatch = false; // variable for checking song available or not

    lis.forEach(li => {
        const text = li.textContent.toLowerCase(); // song name + artist
        if (text.includes(filter)) {
            li.style.display = ""; // show
            hasMatch = true;       // match found
        } else {
            li.style.display = "none"; // hide
        }
    });

    // Check if no songs matched 
    let noResult = document.getElementById("noResult");
    if (!noResult) {
        // create "No result found" element if it doesn't exist
        noResult = document.createElement("li"); // creating a list for showing result
        noResult.id = "noResult";    //giving id to the created list
        noResult.textContent = "No result found";  // storing message to the list
        playlistSongs.appendChild(noResult);   // adding noResult to playlistSongs
    }

    noResult.style.display = hasMatch ? "none" : ""; // show or hide
});

music.addEventListener("timeupdate", (event) => {  
    // audio element ke "timeupdate" event pe ye function chalega, yani har second yaani audio ke currentTime change hone par

    const { currentTime, duration } = event.target;  
    // destructuring: event.target = audio element, yaha se current playback time aur total duration le rahe hai

    let progress_bar = (currentTime / duration) * 100;  
    // progress bar percentage calculate kar rahe hai (0 to 100%)  

    progress.style.width = `${progress_bar}%`;  
    // progress bar ke CSS width ko update kar rahe hai, taki bar audio ke current position ke saath move kare

    let currTime = formatTime(currentTime);  
    // function call: seconds ko minutes:seconds format me convert kar rahe hai, display ke liye

    let totalDuration = formatTime(duration);  
    // function call: total duration ko minutes:seconds format me convert kar rahe hai

    current_Time.textContent = currTime;  
    // UI me current time update kar rahe hai

    if(duration){  
        total_Time.textContent = totalDuration;  
        // agar duration available hai (audio load ho chuka hai), total duration UI me update karenge
    }

    localStorage.setItem(`songTime_${songIndex}`, currentTime);  
    // ✅ Browser me current song ke liye playback time save kar rahe hai
    // key = "songTime_0" ya "songTime_1" etc. aur value = currentTime (in seconds)
});

list.addEventListener("click", () => {  
    // jab user playlist me kisi song pe click kare, ye function chalega

    songIndex = index;  
    // clicked song ka index global songIndex variable me save kar rahe hai
    // taki next/prev aur playback state track ho sake

    localStorage.setItem("currentSongIndex", songIndex);  
    // ✅ Browser me current song index save kar rahe hai, taaki page reload ke baad ye song wapas load ho

    loadSong(songs[songIndex]);  
    // clicked song ka data (title, artist, audio src, image) load kar rahe hai UI me

    playMusic();  
    // song play start kar rahe hai aur play/pause icon + image animation update kar rahe hai

    playlistDiv.classList.add("hidden");  
    // playlist ko hide kar rahe hai, taki UI clean dikhe
});
