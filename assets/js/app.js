var somSom = {

    // settings
    baseSettings: {
        typeSom: '+',
        maxSom: 20,
        totalSom: 10,
        timeTimer: 10,
        someTimeStart: 0,
        baseResult: 0,
    },
    // elements
    modal: document.getElementById("modal"),
    theSom: document.getElementById("theSom"),

    init: function() {
        this.changeSettings();
        this.hideModelOnClick();
        this.getAnswer(this.baseSettings.baseResult);
//      this.makeSom(this.baseSettings.typeSom, this.baseSettings.maxSom, this.baseSettings.baseResult);
    },

    newSom: function() {
        this.somResult();
        this.getAnswer(this.baseSettings.baseResult);
        this.makeSom(this.baseSettings.typeSom, this.baseSettings.maxSom, this.baseSettings.baseResult);
        this.someTimeStart = Date.now();

    },
    
    somResult: function() {
        result = Math.floor(Math.random() * this.baseSettings.maxSom) + 1;
        this.baseSettings.baseResult = result;
    },

    calculateTime: function(t) {
        timer = 0;

    },

    keys: function(e) {
        items = this.baseSettings.maxSom;
        keysHolder = document.getElementById("keysHolder");
        keysHolder.innerHTML = "";
        var i;
        for (i = 0; i < items; i++) {
            divEl = document.createElement("div");
            txt = document.createTextNode(i + 1);
            divEl.appendChild(txt);
            keysHolder.appendChild(divEl).classList.add("key", "key-" + (i+1));
        }
    },

    getAnswer: function(a) {
        keys = document.getElementById("keys");
        keys.addEventListener('click', somSom.checkAnswer);
    },

    checkAnswer: function(e) {
        //console.log('Target: ' + e.target.classList);
        let answer = parseInt(e.target.childNodes[0].data);
        let correctAnswer = parseInt(somSom.baseSettings.baseResult);
        if (answer == correctAnswer) {
            // calculate time taken
            somSom.calTimeTaken(somSom.someTimeStart);
            somSom.showModal("Super!");
            somSom.newSom();
        }
    },

    calTimeTaken: function(t) {
        timeTaken = Math.floor((Date.now() - t) / 1000);
        this.setStars(timeTaken);
        console.log("time taken: " + timeTaken);
    },

    setStars: function(t) {
        let stars = '';
        if( t < 5 ) { 
            stars = 'super';
        }
        else { 
            stars = 'matig';
        }
    },

    showModal: function(c) {
        this.textContent = c;
        this.modal.classList.add("show");
        setTimeout(somSom.hideModal, 2000);
    },

    hideModal: function() {
        this.modal.classList.remove("show");       
    },

    hideModelOnClick: function() { 
        this.modal.addEventListener('click', function() {
            this.classList.remove("show");       
        });
    },

    makeSom: function(t,m,r) {
        let type = t;
        let result = r;
        let num1 = Math.floor(Math.random() * result);
        let num2 = result - num1;
        let sommie = num1 + type + num2;
        let goed = 'goed' + (Math.floor(Math.random() * 5) + 1);
        console.log(goed);
 
        // create array for sound
        let speak = [goed,num1,t,num2,'='];

        this.placeSom(sommie);

        playAudio(speak); 

    },

    placeSom: function(s) {
        this.theSom.innerText = s;
    },

    allSoms: function() {

    },

    changeSettings: function() {

        //get input
        form = document.getElementById("settings");
        form.addEventListener('submit', function(e) {
            somSom.baseSettings.maxSom = this.maxSom.value;
            somSom.baseSettings.typeSom = this.typeSom.value;
            somSom.theSom.classList.toggle("show");
            somSom.keys();
            somSom.somResult();
            somSom.makeSom(somSom.baseSettings.typeSom, somSom.baseSettings.maxSom, somSom.baseSettings.baseResult);

            // move settingsform
            document.getElementById("header").classList.add("top");
            e.preventDefault();

        });

        // Start timeTimer
        selectTimer = document.getElementById("timeTimerSelect");
        selectTimer.addEventListener('change', function(e) {
            timeObj.timer(this.value);
            e.preventDefault();
        });


    },

};
somSom.init();
