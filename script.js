let musicPlayer = document.getElementById('musicPlayer');
let fileInput = document.getElementById('fileInput');
let volumeValue = document.getElementById('volumeValue');

function playMusic() {
    if (fileInput.files.length > 0) {
        let file = URL.createObjectURL(fileInput.files[0]);
        musicPlayer.src = file;
        musicPlayer.play();
    } else {
        alert('Please upload a file first.');
    }
}

function pauseMusic() {
    musicPlayer.pause();
}

function increaseVolume() {
    if (musicPlayer.volume < 1) {
        musicPlayer.volume += 0.1;
        volumeValue.textContent = Math.round(musicPlayer.volume * 100);
    }
}

function decreaseVolume() {
    if (musicPlayer.volume > 0) {
        musicPlayer.volume -= 0.1;
        volumeValue.textContent = Math.round(musicPlayer.volume * 100);
    }
}
