document.addEventListener("DOMContentLoaded", function(event) {
    var thumbnailElement = document.getElementById("fly");

    thumbnailElement.addEventListener("click", function() {
        thumbnailElement.className = "dead";
    });
});