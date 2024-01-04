// Sample quotes
// Sample quotes
const quotes = [
  "Courage is not the absence of fear, but the triumph over it. - Nelson Mandela",
  "Hope is being able to see that there is light despite all of the darkness. - Desmond Tutu",
  “You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life. ― Albert Camus",
  
“For every minute you are angry you lose sixty seconds of happiness. ― Ralph Waldo Emerson",
  
“Count your age by friends, not years. Count your life by smiles, not tears.― John Lennon",

“They say a person needs just three things to be truly happy in this world: someone to love, something to do, and something to hope for. ― Tom Bodett"
“Happiness is a warm puppy. ― Charles M. Schulz"
];

// Select a random quote
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

// Display quote
const quotesSection = document.getElementById("quotes");
const quoteElement = document.createElement("div");
quoteElement.innerText = randomQuote;
quotesSection.appendChild(quoteElement);

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
