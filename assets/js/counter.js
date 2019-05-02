var counters = {

    //el
    display_str: "",
    counter_list: 0,

//    display_div: document.getElementById("counter"),

    
    incrementCount: function (){
        setInterval(this.countMe,1000);
    },

    countMe: function(){

        const display_div = document.getElementById("counter");

        // clear count
        while (display_div.hasChildNodes()) {
            display_div.removeChild(display_div.lastChild);
        }
        counters.counter_list++;
    
        //console.log(counters.counter_list);
    
        display_str = counters.counter_list.toString();
        for (var i = 0; i < display_str.length; i++) {
            var new_span = document.createElement('span');
            new_span.className = 'num_tiles';
            new_span.innerText = display_str[i];
            display_div.appendChild(new_span);
        }    
    }
};

//counters.incrementCount();