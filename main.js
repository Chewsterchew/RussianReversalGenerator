var lines2 = [

["In Soviet Russia,"],

 ["phrases",
"stick",
"sleeping bag",
"burger",
"rocks",
"clothes",
"planes",
"music",
"games",
"hotels",
"cars",
"pikachu",
"videos",
"food",
"phone",
"drinks",
"apps",
"pictures",
"dogs",
"drugs",
"houses",
"knots",
"guns",
"lawns",
"waiters",
"balls",
"fidget spinners",
"horses",
"water",
"rockets",
"animals",
"trampolines",
"jokes",
"diseases",
"trees",
"tissues",
"bottles",
"shoes",
"Waldo",
"bullets",
"space",
"law",
"bath",
"presidents",
"violin",
"ducks",
"bull",
"dance",
"sign",
"english",
"door",
"poems",
"browsing history",
"hat",
"spoon",
"Tetris",
"pie charts",
"flags",
"wheel",
"teeth"],

 ["generate",
"whittles",
"sleeps in",
"eats",
"climb",
"wear",
"fly",
"listens to",
"play",
"check in to",
"drive",
"catches",
"watch",
"buys",
"charges",
"drink",
"download",
"take",
"walk",
"smoke",
"build",
"tie",
"shoot",
"mow",
"tip",
"bounce",
"spin",
"ride",
"sprays",
"launch",
"kill",
"jump on",
"make",
"wash",
"cure",
"plant",
"blow",
"fill",
"finds",
"dodge",
"explores",
"breaks",
"takes",
"assassinates",
"plays",
"hunt",
"rides",
"reads",
"learns",
"closes",
"write",
"deletes",
"wears",
"bends",
"laugh at",
"read",
"raise",
"changes",
"brush",
"throw"
 ],

 ["you!"],

    ];

function changeMessage(){
    for(var i=0; i<4; i++){
            document.getElementById(i+"line").innerHTML=lines2[i][(Math.floor(Math.random()*lines2[i].length))];
    }
    document.getElementById("startBttn").textContent = "Again?";
}
