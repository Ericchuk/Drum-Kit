let keys = document.querySelectorAll(".eachkey");
let keysValue = document.querySelectorAll(".eachkey h1")
window.addEventListener("keydown", function(e){
    // KEY A 
    if(e.keyCode === 65 && keys[0]){
        let Audio = document.createElement("audio");
        Audio.setAttribute("src", "audio/clap.wav");
        Audio.play();
        keys[0].classList.add("playing")
        keys[0].classList.remove("each")
        // let keys = document.querySelector(".eachkey");
        console.log(keys[0].classList);
        keys[0].style.border = "3px solid yellow";
        keys[0].style.transform = "scale(1.1)";
        keys[0].style.boxShadow = "0 0 10px #ffc600";
    }
        // KEY B
    else if(e.keyCode === 66){
        let Audio = document.createElement("audio");
        Audio.setAttribute("src", "audio/hihat.wav");
        Audio.play();
        keys[1].classList.add("opening");    }
        // KEY C
    else if(e.keyCode === 67){
        let Audio = document.createElement("audio");
        Audio.setAttribute("src", "audio/kick.wav");
        Audio.play();
        keys[2].classList.add("opening");    }
        // KEY D
    else if(e.keyCode === 68){
        let Audio = document.createElement("audio");
        Audio.setAttribute("src", "audio/openhat.wav");
        Audio.play();
        keys[3].classList.add("opening");    }
        // KEY E
    else if(e.keyCode === 69){
        let Audio = document.createElement("audio");
        Audio.setAttribute("src", "audio/boom.wav");
        Audio.play();
        keys[4].classList.add("opening");}
        // KEY F
    else if(e.keyCode === 70){
        let Audio = document.createElement("audio");
        Audio.setAttribute("src", "audio/ride.wav");
        Audio.play();
        keys[5].classList.add("opening");    }
        // KEY G
    else if(e.keyCode === 71){
        let Audio = document.createElement("audio");
        Audio.setAttribute("src", "audio/snare.wav");
        Audio.play();
        keys[6].classList.add("opening");    }
        // KEY H
    else if(e.keyCode === 72){
        let Audio = document.createElement("audio");
        Audio.setAttribute("src", "audio/tom.wav");
        Audio.play();
        keys[7].classList.add("opening");    }
        // KEY I
    else if(e.keyCode === 73){
        let Audio = document.createElement("audio");
        Audio.setAttribute("src", "audio/tink.wav");
        Audio.play();
        keys[8].classList.add("opening");    }
        else{
            return;
        }
}) 

