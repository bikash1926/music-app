const music = new Audio("audio/1.mp3");


const songs = [
    { id: 1, imageSrc: '1.jpg', title: 'hata shs', subtitle: 'jldgg' },
    { id: 2, imageSrc: '2.jpg', title: 'bande ma ta ram', subtitle: 'er' },
    { id: 3, imageSrc: '3.jpg', title: 'hera pheri', subtitle: 'jldgg' },
    { id: 4, imageSrc: '4.jpg', title: 'dabang', subtitle: 'jldgg' },
    { id: 5, imageSrc: '5.jpg', title: 'don', subtitle: 'jldgg' },
    { id: 6, imageSrc: '6.jpg', title: 'a ladaki', subtitle: 'jldgg' },
    { id: 7, imageSrc: '7.jpg', title: 'dreem', subtitle: 'jldgg' },
    { id: 8, imageSrc: '8.jpg', title: 'hata shs', subtitle: 'jldgg' },
    { id: 9, imageSrc: '9.jpg', title: 'hata shs', subtitle: 'jldgg' },
    { id: 10, imageSrc: '10.jpg', title: 'hata shs', subtitle: 'jldgg' },
    { id: 11, imageSrc: '11.jpg', title: 'hata shs', subtitle: 'jldgg' },
    { id: 12, imageSrc: '12.jpg', title: 'dreem', subtitle: 'j' },
    { id: 13, imageSrc: '13.jpg', title: 'hata shs', subtitle: 'er' },
    { id: 14, imageSrc: '14.jpg', title: 'dabang', subtitle: 'j' },
    { id: 15, imageSrc: '15.jpg', title: 'hata shs', subtitle: 'er' },
    { id: 16, imageSrc: '16.jpg', title: 'dreem', subtitle: 'j' },
    { id: 17, imageSrc: '17.jpg', title: 'hata shs', subtitle: 'er' },
    { id: 18, imageSrc: '18.jpg', title: 'dabang', subtitle: 'j' },
    { id: 19, imageSrc: '19.jpg', title: 'dreem', subtitle: 'er' },
    { id: 20, imageSrc: '20.jpg', title: 'dabang', subtitle: 'j' }
    // Add more songs as needed
];

// Function to create the song list dynamically
function createSongList() {
    const songListContainer = document.getElementById('songList');

    songs.forEach((song, index) => {
        const li = document.createElement('li');
        li.className = 'songitem';

        li.innerHTML = `
            <span>${index + 1}</span>
            <img src="img/${song.imageSrc}" alt="">
            <h5>${song.title}<br>
                <div class="odia">${song.subtitle}</div>
            </h5>
            <i class="bi bi-play-circle-fill" id="${index + 1}"></i>
        `;

        songListContainer.appendChild(li);
    });
}

// Function to create the popular songs dynamically
function createPopularSongs() {
    const popularSongsContainer = document.getElementById('pop');

    songs.forEach((song, index) => {
        const li = document.createElement('li');
        li.className = 'songitem';

        li.innerHTML = `
            <div class="img_paly">
                <img src="img/${song.imageSrc}" alt="">
                <i class="bi bi-play-circle-fill" id="${index + 1}"></i>
            </div>
            <h5>${song.title}<br>
                <div class="odia">${song.subtitle}</div>
            </h5>
        `;

        popularSongsContainer.appendChild(li);
    });
}

// Initialize the song list and popular songs
createSongList();
createPopularSongs();


let play_song = document.getElementById("play_song");
play_song.addEventListener("click", () => {
    if (music.paused || music.currenttime < -0) {
        music.play();
        play_song.classList.add('bi-pause-fill');
        play_song.classList.remove('bi-play-fill');
    
    }
    else {
        music.pause();
        play_song.classList.remove('bi-pause-fill');
        play_song.classList.add('bi-play-fill');
       
    }
});

const makeAll = () => {
    Array.from(document.getElementsByClassName('songitem')).forEach((t) => {
        t.style.backgroundColor = " rgb(148, 160, 216 , 0.0)"; // Corrected to use rgba
    });
};

let index = 0;
let poster_master = document.getElementById('poster_master');
let title = document.getElementById('titel');
// let subtitel = document.getElementsByClassName('subtitel');
Array.from(document.getElementsByClassName("bi-play-circle-fill")).forEach((e) => {
    e.addEventListener("click", (a) => {
        index = a.target.id;
        // Debug logging
        console.log("Index:",index);

        music.src = `audio/${index}.mp3`;
        // console.log("Music Source:", music.src);
        poster_master.src = `img/${index}.jpg`;
        title.innerHTML = songs[index-1].title;
        // subtitel.innerHTML = songs[index]. subtitel ;
        // console.log("Poster Source:", poster_master.src);
        music.play();
        play_song.classList.add('bi-pause-fill');
        play_song.classList.remove('bi-play-fill');

        makeAll();
        Array.from(document.getElementsByClassName('songitem')) [index-1].style.backgroundColor = " rgb(148, 160, 216,1)";
       
    });
});

let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
let sik = document.getElementById("sik");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0]; // Assuming you want the first element with the class 'dot'
let volumeControl = document.getElementById("volumeControl");
let vol_bar = document.getElementById("vol_bar");
let vol_dot = document.getElementById("vol_dot");
let vol_icon = document.getElementById("vol_icon");
let prevBtn = document.getElementById("privious");  // Updated to target the new icon
let nextBtn = document.getElementById("next"); 

music.addEventListener("timeupdate", () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    // Calculate the minutes and seconds for the current time
    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if (sec2 < 10) {  // Add a leading zero for single-digit seconds
        sec2 = `0${sec2}`;
    }

    // Calculate the minutes and seconds for the total duration
    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
    if (sec1 < 10) {  // Add a leading zero for single-digit seconds
        sec1 = `0${sec1}`;
    }

    // Update the text content of currentStart and currentEnd
    currentStart.innerText = `${min2}:${sec2}`;
    currentEnd.innerText = `${min1}:${sec1}`;

    // Update the progress bar (seek bar)
    let progressBar = parseInt((music_curr / music_dur) * 100);
    sik.value = progressBar;

    // Update the width of the bar2 element
    bar2.style.width = `${progressBar}%`;

    // Move the dot along with the progress bar (optional)
    if (dot) {
        dot.style.left = `${progressBar}%`;
    }
});
volumeControl.addEventListener("input", () => {
    let volume = volumeControl.value / 100; // Convert to a value between 0 and 1
    music.volume = volume;

    // Update the volume bar and dot
    vol_bar.style.width = `${volumeControl.value}%`;
    vol_dot.style.left = `${volumeControl.value}%`;

    // Change the volume icon based on the volume level
    if (volumeControl.value == 0) {
        vol_icon.classList.replace("bi-volume-up", "bi-volume-mute");
    } else if (volumeControl.value <= 50) {
        vol_icon.classList.replace("bi-volume-up", "bi-volume-down");
    } else {
        vol_icon.classList.replace("bi-volume-down", "bi-volume-up");
        vol_icon.classList.replace("bi-volume-mute", "bi-volume-up");
    }
});

bar2.addEventListener("click", (e) => {
    let barWidth = bar2.clientWidth; // Width of the progress bar
    let clickX = e.offsetX; // X position of the click within the progress bar
    let music_dur = music.duration; // Duration of the current song

    // Calculate the new current time based on the click position
    let newTime = (clickX / barWidth) * music_dur;

    // Set the new current time and update the music
    music.currentTime = newTime;
});

let currentSong = 1; // Keep track of the current song
// Function to load a specific song
function loadSong(songNumber) {
    music.src = `audio/${songNumber}.mp3`;
    music.play();
}
// Function to go to the previous song
prevBtn.addEventListener("click", () => {
    currentSong--;
    if (currentSong < 1) {
        currentSong = 3; // Assume there are 3 songs, loop to the last song
    }
    loadSong(currentSong);
})
// Function to go to the next song
nextBtn.addEventListener("click", () => {
    currentSong++;
    if (currentSong > 3) { // Assume there are 3 songs, loop to the first song
        currentSong = 1;
    }
    loadSong(currentSong);
});

// Automatically play the next song when the current one ends
music.addEventListener("ended", () => {
    nextBtn.click();
})

let pop_song_left = document.getElementById("pop_song_left");
let pop_song_right = document.getElementById("pop_song_right");
let pop_song = document.getElementsByClassName("pop_song")[0];
pop_song_right.addEventListener("click", () => {
    pop_song.scrollLeft += 330;
})
pop_song_left.addEventListener("click", () => {
    pop_song.scrollLeft -= 330;
})
document.getElementById('pop_art_right').addEventListener('click', function () {
    document.querySelector('.Artist_box').scrollBy({
        left: -300, // Adjust this value to control the scroll distance to the left
        behavior: 'smooth'
    });
});
document.getElementById('pop_art_left').addEventListener('click', function () {
    document.querySelector('.Artist_box').scrollBy({
        left: 300, // Adjust this value to control the scroll distance to the right
        behavior: 'smooth'
    });
});
