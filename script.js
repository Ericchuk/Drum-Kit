let keys = document.querySelectorAll(".eachkey");
let keysValue = document.querySelectorAll(".eachkey h1")
window.addEventListener("keydown", function(e){
    // KEY A 
    function lightOut(){
        keys[0].style.border = "3px solid black";
        keys[0].style.transform = "scale(1)";
        keys[0].style.boxShadow = "none";
        keys[1].style.border = "3px solid black";
        keys[1].style.transform = "scale(1)";
        keys[1].style.boxShadow = "none";
        keys[2].style.border = "3px solid black";
        keys[2].style.transform = "scale(1)";
        keys[2].style.boxShadow = "none";
        keys[3].style.border = "3px solid black";
        keys[3].style.transform = "scale(1)";
        keys[3].style.boxShadow = "none";
        keys[4].style.border = "3px solid black";
        keys[4].style.transform = "scale(1)";
        keys[4].style.boxShadow = "none";
        keys[5].style.border = "3px solid black";
        keys[5].style.transform = "scale(1)";
        keys[5].style.boxShadow = "none";
        keys[6].style.border = "3px solid black";
        keys[6].style.transform = "scale(1)";
        keys[6].style.boxShadow = "none";
        keys[7].style.border = "3px solid black";
        keys[7].style.transform = "scale(1)";
        keys[7].style.boxShadow = "none";
        keys[8].style.border = "3px solid black";
        keys[8].style.transform = "scale(1)";
        keys[8].style.boxShadow = "none";
    }
    setTimeout(lightOut, 100);
    if(e.keyCode === 65 && keys[0]){
        let Audio = document.createElement("audio");
        Audio.setAttribute("src", "audio/clap.wav");
        Audio.play();
        // let keys = document.querySelector(".eachkey");
        keys[0].style.border = "3px solid yellow";
        keys[0].style.transform = "scale(1.1)";
        keys[0].style.boxShadow = "0 0 10px #ffc600";
    }
        // KEY B
    else if(e.keyCode === 66){
        let Audio = document.createElement("audio");
        Audio.setAttribute("src", "audio/hihat.wav");
        Audio.play();
        keys[1].style.border = "3px solid yellow";
        keys[1].style.transform = "scale(1.1)";
        keys[1].style.boxShadow = "0 0 10px #ffc600";
    }
        // KEY C
    else if(e.keyCode === 67){
        let Audio = document.createElement("audio");
        Audio.setAttribute("src", "audio/kick.wav");
        Audio.play();
        keys[2].style.border = "3px solid yellow";
        keys[2].style.transform = "scale(1.1)";
        keys[2].style.boxShadow = "0 0 10px #ffc600";
    }
        // KEY D
    else if(e.keyCode === 68){
        let Audio = document.createElement("audio");
        Audio.setAttribute("src", "audio/openhat.wav");
        Audio.play();
        keys[3].style.border = "3px solid yellow";
        keys[3].style.transform = "scale(1.1)";
        keys[3].style.boxShadow = "0 0 10px #ffc600";
    }
        // KEY E
    else if(e.keyCode === 69){
        let Audio = document.createElement("audio");
        Audio.setAttribute("src", "audio/boom.wav");
        Audio.play();
        keys[4].style.border = "3px solid yellow";
        keys[4].style.transform = "scale(1.1)";
        keys[4].style.boxShadow = "0 0 10px #ffc600";
    }
        // KEY F
    else if(e.keyCode === 70){
        let Audio = document.createElement("audio");
        Audio.setAttribute("src", "audio/ride.wav");
        Audio.play();
        keys[5].style.border = "3px solid yellow";
        keys[5].style.transform = "scale(1.1)";
        keys[5].style.boxShadow = "0 0 10px #ffc600";
    }
        // KEY G
    else if(e.keyCode === 71){
        let Audio = document.createElement("audio");
        Audio.setAttribute("src", "audio/snare.wav");
        Audio.play();
        keys[6].style.border = "3px solid yellow";
        keys[6].style.transform = "scale(1.1)";
        keys[6].style.boxShadow = "0 0 10px #ffc600";
    }
        // KEY H
    else if(e.keyCode === 72){
        let Audio = document.createElement("audio");
        Audio.setAttribute("src", "audio/tom.wav");
        Audio.play();
        keys[7].style.border = "3px solid yellow";
        keys[7].style.transform = "scale(1.1)";
        keys[7].style.boxShadow = "0 0 10px #ffc600";
    }
        // KEY I
    else if(e.keyCode === 73){
        let Audio = document.createElement("audio");
        Audio.setAttribute("src", "audio/tink.wav");
        Audio.play();
        keys[8].style.border = "3px solid yellow";
        keys[8].style.transform = "scale(1.1)";
        keys[8].style.boxShadow = "0 0 10px #ffc600";
    }
        else{
            return;
        }
}) 

