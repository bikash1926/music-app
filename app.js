const music = new Audio("audio/1.mp3");

const songs = [
    { id: 1, imageSrc: '1.jpg', title: 'hata shs', subtitle: 'jldgg' },
    { id: 2, imageSrc: '2.jpg', title: 'bande ma ta ram', subtitle: 'er' },
    { id: 3, imageSrc: '3.jpg', title: 'hera pheri', subtitle: '' },
    { id: 4, imageSrc: '4.jpg', title: 'dabang', subtitle: '' },
    { id: 5, imageSrc: '5.jpg', title: 'don', subtitle: '' },
    { id: 6, imageSrc: '6.jpg', title: 'a ladaki', subtitle: '' },
    { id: 7, imageSrc: '7.jpg', title: 'dreem', subtitle: '' },
    { id: 8, imageSrc: '8.jpg', title: '', subtitle: '' },
    { id: 9, imageSrc: '9.jpg', title: '', subtitle: '' },
    { id: 10, imageSrc: '10.jpg', title: '', subtitle: '' },
    { id: 11, imageSrc: '11.jpg', title: '', subtitle: '' },
    { id: 12, imageSrc: '12.jpg', title: '', subtitle: '' },
    { id: 13, imageSrc: '13.jpg', title: '', subtitle: '' },
    { id: 14, imageSrc: '14.jpg', title: '', subtitle: '' },
    { id: 15, imageSrc: '15.jpg', title: '', subtitle: '' },
    { id: 16, imageSrc: '16.jpg', title: '', subtitle: '' },
    { id: 17, imageSrc: '17.jpg', title: '', subtitle: '' },
    { id: 18, imageSrc: '18.jpg', title: '', subtitle: '' },
    { id: 19, imageSrc: '19.jpg', title: '', subtitle: '' },
    { id: 20, imageSrc: '20.jpg', title: '', subtitle: '' }
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
const makePlay = () => {
    Array.from(document.getElementsByClassName('')).forEach((l) => {
        l.classList.add('bi-play-circle-fill');
        l.classList.remove('bi-pause-circle-fill'); 
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
        makePlay ();
        l.target.classList.remove(' bi-pause-circle-fill');
        l.target.classList.add('bi-play-circle-fill');
    });
});

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
