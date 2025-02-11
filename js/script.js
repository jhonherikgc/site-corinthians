document.addEventListener("DOMContentLoaded", function () {
    var acc = document.querySelectorAll(".accordion");

    acc.forEach(function (btn) {
        btn.addEventListener("click", function () {
            this.classList.toggle("active");

            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    });
});
