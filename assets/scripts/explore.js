// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var txt = window.speechSynthesis;
  //const voices = txt.getVoices();

  const voices = speechSynthesis.getVoices();
  var sel = document.getElementById('voice-select');

  // for (let i = 0; i < voices.length; i++) {
  //   const option = document.createElement('option');
  //   option.textContent = `${voices[i].name} (${voices[i].lang})`;

  //   if (voices[i].default) {
  //     option.textContent += ' — DEFAULT';
  //   }
  //   option.value = voices[i];
  //   option.setAttribute('data-lang', voices[i].lang);
  //   option.setAttribute('data-name', voices[i].name);
  //   sel.append(option);
  // }
  
  for(var i = 0; i < voices.length; i++){
    var voice = voices[i];
    var op = document.createElement("option");
    op.textContent = voice.name;
    op.value = voice;
    sel.append(op);
  }
  var but = document.getElementsByTagName('button')[0];
  but.onclick = function(){
    var image = document.images;
    
    var speechtext =  document.getElementById('text-to-speak').value;
    const utterance = new SpeechSynthesisUtterance(speechtext);
    var selvoice = document.getElementById('voice-select').value;
    utterance.voice = selvoice.value;
    console.log(utterance.voice);
    txt.speak(utterance);
 
    
    
    
  }
}