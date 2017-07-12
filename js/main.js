var favSongs = [
  {
    order: 1,
    song: "No Quarter",
    artist: "Led Zepplin",
    link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Pu94mWlgzMY" frameborder="0" allowfullscreen></iframe>`
  },
  {
    order: 2,
    song: "Wish You Were Here",
    artist: "Pink Floyd",
    link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/hjpF8ukSrvk" frameborder="0" allowfullscreen></iframe>`
  },
  {
    order: 3,
    song: "Bohemian Rhapsody",
    artist: "Queen",
    link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/fJ9rUzIMcZQ" frameborder="0" allowfullscreen></iframe>`
  }
];

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
}
/*tbody.addEventListener('click', function() {
  tbody.style.color = '#5760E0';
}); */
