// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    var x = document.getElementById('horn-select');
    console.log(x);
    var image = document.images;
    const jsConfetti = new JSConfetti();
    x.onchange = function() {
        var y = document.getElementById('horn-select').value;
        var elements = document.getElementsByClassName('expose')
        console.log(elements)
        if(y == "air-horn"){
            image[0].src= "assets/images/air-horn.svg";  
        }
        else if(y == "car-horn"){
            image[0].src= "assets/images/car-horn.svg";
        }
        else if(y == "party-horn"){
            image[0].src= "assets/images/party-horn.svg";   
        }
    }  
    var vol = document.getElementById('volume');
    vol.onchange = function(){
        console.log(vol.value);
        if(vol.value == 0){
            image[1].src = "assets/icons/volume-level-0.svg";
        }
        else if(vol.value < 33){
            image[1].src = "assets/icons/volume-level-1.svg";
        }
        else if(vol.value < 67){
            image[1].src = "assets/icons/volume-level-2.svg";
        }
        else{
            image[1].src = "assets/icons/volume-level-3.svg";
        }
    }
    
    var but = document.getElementsByTagName('button')[0];
    but.onclick = function(){
        var y = document.getElementById('horn-select').value;
        if(y == "air-horn"){
            let audio = new Audio('assets/audio/air-horn.mp3');
            audio.volume = vol.value/100;
            audio.play(); 
        }
        else if(y == "car-horn"){
            let audio = new Audio('assets/audio/car-horn.mp3');
            audio.volume = vol.value/100;
            audio.play();
        }
        else if(y == "party-horn"){
            let audio = new Audio('assets/audio/party-horn.mp3');
            
            jsConfetti.addConfetti();
            audio.volume = vol.value/100;
            audio.play();   
        }
    }
    
    
}
