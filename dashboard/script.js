$(document).ready(function() {

function showProgress(element, progress){
    var bar = new ldBar(document.querySelector(element));
    bar.set(0, false);
    setInterval(function() {
        bar.set(progress);
    }, 800);
    }

showProgress("#ldBar1", 75);
showProgress("#ldBar2", 50);
showProgress("#ldBar3", 15);
showProgress("#ldBar4", 89);
showProgress("#ldBar5", 95);
showProgress("#ldBar6", 100);

});
