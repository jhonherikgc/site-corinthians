window.addEventListener("load", function () {
    this.setTimeout(function (){
        document.getElementById("preloader").style.display = "none";
        document.querySelector("main").style.display = "block";
        document.querySelector("header").style.display = "block";
    let preloader = this.document.getElementById("preloader");
    preloader.style.display = "none";
}, 1000);
});


