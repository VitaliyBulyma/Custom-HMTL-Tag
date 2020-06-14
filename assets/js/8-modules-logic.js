var module = (function(){

    var close = function() {
        document.getElementById("uname").setAttribute('class','d-none' );        
    }; 

    var mymod = {
        mess : close
    };
    return mymod;
}) ();