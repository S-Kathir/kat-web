// Sample quotes
const quotes = [
  "Courage is not the absence of fear, but the triumph over it. - Nelson Mandela",
  "Hope is being able to see that there is light despite all of the darkness. - Desmond Tutu",
  // Add more quotes
];

// Display quotes
const quotesSection = document.getElementById("quotes");
quotes.forEach(quote => {
  const quoteElement = document.createElement("div");
  quoteElement.innerText = quote;
  quotesSection.appendChild(quoteElement);
});

// Sample songs
const songs = [
  { title: "Song 1", artist: "Artist 1" },
  // Add more songs
];

// Display music player
const musicPlayerSection = document.getElementById("music-player");
const musicPlayer = document.createElement("div");
musicPlayer.innerHTML = `
  <audio controls>
    <source src="song1.mp3" type="audio/mpeg">
    <!-- Add more source tags for each song -->
  </audio>
  <ul>
    ${songs.map(song => `<li>${song.title} - ${song.artist}</li>`).join("")}
  </ul>
`;
musicPlayerSection.appendChild(musicPlayer);
