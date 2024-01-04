let musicPlayer = document.getElementById('musicPlayer');
let fileInput = document.getElementById('fileInput');

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
