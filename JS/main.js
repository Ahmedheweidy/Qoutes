var mainListDiv = document.getElementById("mainListDiv"),
    mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {
    
    "use strict";
    
    mainListDiv.classList.toggle("show_list");
    mediaButton.classList.toggle("active");
    
};



let aloneQ = ["“Loneliness expresses the pain of being alone and solitude expresses the glory of being alone.”",
  "“Fail I alone, in words and deeds? Why, all men strive and who succeeds?”",
  "“The strong man is strongest when alone.”",
  "“I think Alone in the Dark was too much an action creature movie than a horror creature movie.”",
  "“Music is one of those things that make us feel a little less alone in the world.”",
  "“Blood alone moves the wheels of history.”",
  "“A human being is a single being. Unique and unrepeatable.”",
  "“The light of lights looks always on the motive, not the deed, the shadow of shadows on the deed alone.”",
  "“Marriage is good for those who are afraid to sleep alone at night.”"
];


let aloneA = ["Paul Tillich",
  "Robert Browning",
  "Friedrich Schiller",
  "Uwe Boll",
  "Tom Cochrane",
  "Martin Luther",
  "Eileen Caddy",
  "William Butler Yeats",
  "St. Jerome"
];
var length = aloneQ.length;
function aloneQuotes() {
  var rand = Math.floor(Math.random() * (aloneQ.length - 1));
  document.getElementById('quoteOutput').innerHTML = aloneQ[rand];
  document.getElementById('authorOutput').innerHTML = aloneA[rand];
}

