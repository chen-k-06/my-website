document.getElementById("mode-button").addEventListener("click", () => {
    let body = document.body;
    let button = document.getElementById("mode-button");
    if (body.classList.contains("day")) {
        body.classList.add("night");
        body.classList.remove("day");
        button.textContent = "⏾";
        console.log("Night mode is active");
    }
    else {
        body.classList.remove("night");
        body.classList.add("day");
        button.textContent = "☀";
        console.log("Day mode is active");
    }
});