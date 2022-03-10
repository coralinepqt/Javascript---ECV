(function() {
    "use strict";
    document.addEventListener("DOMContentLoaded", initialiser);


    function initialiser(evt) {
        var fleche = document.querySelector(".scroll");
        fleche.addEventListener("click", scroll, true);
        console.log(scroll);

    }

}());