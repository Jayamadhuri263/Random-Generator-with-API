let jokeTextEl = document.getElementById("jokeText");
let jokeButtonEl = document.getElementById("jokeButton");
let spinnerEl = document.getElementById("spinner");

let options = {
    method: "GET",
};

function getRandomJoke() {
    spinnerEl.classList.remove("d-none");
    jokeTextEl.classList.add("d-none");

    fetch("https://api.chucknorris.io/jokes/random", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            const randomJoke = jsonData.value;

            spinnerEl.classList.add("d-none");
            jokeTextEl.classList.remove("d-none");

            jokeTextEl.textContent = randomJoke;
        });
}

jokeButtonEl.addEventListener("click", getRandomJoke);