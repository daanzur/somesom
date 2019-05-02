function playAudio(s) { 

    var audioHolder = new Audio();
    var audioBaseSource = "audio/";
    var audioBaseType = ".mp3";
    var audioList_index = 0;
//    console.log('array length: '+ s.length);
    audioHolder.src = audioBaseSource + s[0] + audioBaseType;
    audioHolder.play();

    audioHolder.addEventListener("ended", nextTrack);

    function nextTrack() {
        if(audioList_index == s.length - 1) {
    //        audioList_index = 0;
    //        audioHolder.src = '';
    //        audioHolder.removeEventListener("ended", nextTrack);
            return;
        } else {
            audioList_index++;	
        }
        audioHolder.src = audioBaseSource + s[audioList_index] + audioBaseType;
        audioHolder.play();
        // console.log('new source: ' + audioHolder.src);
        // console.log("current index: " + audioList_index);
    }
}

function playTrack() {
    //audioHolder.load();
}