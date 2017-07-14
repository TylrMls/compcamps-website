var favSongs = [
  {
    order: 1,
    song: "No Quarter",
    artist: "Led Zepplin",
    link: "<iframe id=\"youtubeVideos_0\" src=\"https://www.youtube.com/embed/Pu94mWlgzMY\" frameborder=\"0\" allowfullscreen></iframe>"
  },
  {
    order: 2,
    song: "Wish You Were Here",
    artist: "Pink Floyd",
    link: "<iframe id=\"youtubeVideos_1\" src=\"https://www.youtube.com/embed/hjpF8ukSrvk\" frameborder=\"0\" allowfullscreen></iframe>"
  },
  {
    order: 3,
    song: "Bohemian Rhapsody",
    artist: "Queen",
    link: "<iframe id=\"youtubeVideos_2\" src=\"https://www.youtube.com/embed/fJ9rUzIMcZQ\" frameborder=\"0\" allowfullscreen></iframe>"
  }
];
var videosLoaded = 0;

console.log(favSongs);
var tbody = document.querySelector("tbody");
for(var i in favSongs) {
  var tr = document.createElement("tr");

  //order, song, artist, link
  for (var j in favSongs[i]) {
    var td1 = document.createElement("td");
      td1.innerText = favSongs[i][j];
      if (j == 'link') {
        td1.innerHTML = favSongs[i][j];
      } else {
        td1.innerText = favSongs[i][j];
      }
      tr.appendChild(td1);
  }
  tbody.appendChild(tr);
  try {
    document.querySelector("#youtubeVideos_" + videosLoaded).style.width = "450px";
    document.querySelector("#youtubeVideos_" + videosLoaded).style.height = "295px";
    videosLoaded++;
  } catch(error) {
    console.log("Error resizing iframes: " + error);
  }
}

if(videosLoaded == favSongs.length) {
  console.log("All Iframes Loaded");
}

/*tbody.addEventListener('click', function() {
  tbody.style.color = '#5760E0';
}); */
