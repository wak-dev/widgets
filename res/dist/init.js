function loadVoices(){var e=speechSynthesis.getVoices();e.forEach(function(e){var t=document.createElement("option");t.value=e.name,t.innerHTML=e.name,voiceSelect.appendChild(t)})}function speak(e){var t=new SpeechSynthesisUtterance;t.text=e,t.volume=parseFloat(volumeInput.value),t.rate=parseFloat(rateInput.value),t.pitch=parseFloat(pitchInput.value),voiceSelect.value&&(t.voice=speechSynthesis.getVoices().filter(function(e){return e.name==voiceSelect.value})[0]),window.speechSynthesis.speak(t)}var supportMsg=document.getElementById("msg");"speechSynthesis"in window?supportMsg.innerHTML="Your browser <strong>supports</strong> speech synthesis.":(supportMsg.innerHTML='Sorry your browser <strong>does not support</strong> speech synthesis.<br>Try this in <a href="http://www.google.co.uk/intl/en/chrome/browser/canary.html">Chrome Canary</a>.',supportMsg.classList.add("not-supported"));var button=document.getElementById("speak"),speechMsgInput=document.getElementById("speech-msg"),voiceSelect=document.getElementById("voice"),volumeInput=document.getElementById("volume"),rateInput=document.getElementById("rate"),pitchInput=document.getElementById("pitch");loadVoices(),window.speechSynthesis.onvoiceschanged=function(){loadVoices()},button.addEventListener("click",function(){speechMsgInput.value.length>0&&speak(speechMsgInput.value)});