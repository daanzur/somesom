var somSom={baseSettings:{typeSom:"+",maxSom:20,totalSom:10,timeTimer:10,someTimeStart:0,baseResult:0},modal:document.getElementById("modal"),theSom:document.getElementById("theSom"),init:function(){this.changeSettings(),this.hideModelOnClick(),this.getAnswer(this.baseSettings.baseResult)},newSom:function(){this.somResult(),this.getAnswer(this.baseSettings.baseResult),this.makeSom(this.baseSettings.typeSom,this.baseSettings.maxSom,this.baseSettings.baseResult),this.someTimeStart=Date.now()},somResult:function(){result=Math.floor(Math.random()*this.baseSettings.maxSom)+1,this.baseSettings.baseResult=result},calculateTime:function(e){timer=0},keys:function(e){var t;for(items=this.baseSettings.maxSom,keysHolder=document.getElementById("keysHolder"),keysHolder.innerHTML="",t=0;t<items;t++)divEl=document.createElement("div"),txt=document.createTextNode(t+1),divEl.appendChild(txt),keysHolder.appendChild(divEl).classList.add("key","key-"+(t+1))},getAnswer:function(e){keys=document.getElementById("keys"),keys.addEventListener("click",somSom.checkAnswer)},checkAnswer:function(e){parseInt(e.target.childNodes[0].data)==parseInt(somSom.baseSettings.baseResult)&&(somSom.calTimeTaken(somSom.someTimeStart),somSom.showModal("Super!"),somSom.newSom())},calTimeTaken:function(e){timeTaken=Math.floor((Date.now()-e)/1e3),this.setStars(timeTaken),console.log("time taken: "+timeTaken)},setStars:function(e){let t="";t=e<5?"super":"matig"},showModal:function(e){this.textContent=e,this.modal.classList.add("show"),setTimeout(somSom.hideModal,2e3)},hideModal:function(){this.modal.classList.remove("show")},hideModelOnClick:function(){this.modal.addEventListener("click",function(){this.classList.remove("show")})},makeSom:function(e,t,s){let o=e,m=s,n=Math.floor(Math.random()*m),i=m-n,a=n+o+i,l="goed"+(Math.floor(5*Math.random())+1);console.log(l);let d=[l,n,e,i,"="];this.placeSom(a),playAudio(d)},placeSom:function(e){this.theSom.innerText=e},allSoms:function(){},changeSettings:function(){form=document.getElementById("settings"),form.addEventListener("submit",function(e){somSom.baseSettings.maxSom=this.maxSom.value,somSom.baseSettings.typeSom=this.typeSom.value,somSom.theSom.classList.toggle("show"),somSom.keys(),somSom.somResult(),somSom.makeSom(somSom.baseSettings.typeSom,somSom.baseSettings.maxSom,somSom.baseSettings.baseResult),document.getElementById("header").classList.add("top"),e.preventDefault()}),selectTimer=document.getElementById("timeTimerSelect"),selectTimer.addEventListener("change",function(e){timeObj.timer(this.value),e.preventDefault()})}};somSom.init();