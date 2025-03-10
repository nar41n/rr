document.getElementById("yes-btn").addEventListener("click", function() {
    document.getElementById("main-page").classList.add("hidden");
    document.getElementById("yes-page").classList.remove("hidden");
});

document.getElementById("no-btn").addEventListener("click", function() {
    document.getElementById("main-page").classList.add("hidden");
    document.getElementById("no-page").classList.remove("hidden");
});

document.querySelectorAll(".back-btn").forEach(button => {
    button.addEventListener("click", function() {
        document.getElementById("yes-page").classList.add("hidden");
        document.getElementById("no-page").classList.add("hidden");
        document.getElementById("main-page").classList.remove("hidden");
    });
});