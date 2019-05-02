var timeObj = {
    countdown: '',
    countup: '',
    timerDisplay: document.getElementById('timeTimer'),
    timer: function(seconds) {
        //clear all running timers
        clearInterval(this.countdown);
    
        const now = Date.now();
        const then = now + seconds * 1000;
        this.displayTimeLeft(seconds);

        timeObj.countdown = setInterval(() => {
            const secondsLeft = Math.round((then - Date.now()) / 1000);
            // stop if smaller then 0
            if(secondsLeft < 0) {
                clearInterval(timeObj.countdown);
                return;
            }
            // display it
            this.displayTimeLeft(secondsLeft);
        }, 1000);
    },

    displayTimeLeft: function(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        const display = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
        this.timerDisplay.textContent = `${seconds == 0 ? 'Klaar!' : display}`;
        // console.log({minutes, remainingSeconds});
        // console.log(seconds);
    },

    timerSom: function(str) {
        const now = Date.now();
        let timetaken = Math.floor((now - str) / 1000);
        //this.displayTimeLeft();
        console.log('time taken: ' + timetaken);
        console.log('start: ' + str);
        console.log('now: ' + now);
    }
};



//timeObj.timer(125);
