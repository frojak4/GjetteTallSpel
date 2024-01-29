let app = document.querySelector(".app");
let skrift = document.querySelector(".skrift");

let randomNumber;
let gjettaNummer;
let forsøk;

function mainScreen() {
    forsøk = 0;
    randomNumber = Math.floor(Math.random() * 10)
    app.innerHTML = /*HTML*/ `
    <h1 class="overskrift"> Gjett Nummer</h1>
    <div class="inputfelt">
        <input id="input"><button onclick="gjett()">Gjett!</button>
    </div>
    `
}

mainScreen();

function gjett() {
    let input = document.getElementById("input").value;
    gjettaNummer = parseInt(input);
    forsøk ++;

    if (gjettaNummer < randomNumber) {
        app.innerHTML += /*HTML*/ `
        <h1 class="skrift">${gjettaNummer}↑</h1> <br/>
        `
} else if (gjettaNummer > randomNumber) {
    app.innerHTML += /*HTML*/ `
    <h1 class="skrift">${gjettaNummer}↓</h1> <br/>
    `
} else if (gjettaNummer == randomNumber) {
    app.innerHTML += /*HTML*/ `
    <h1 class="skrift">Gratulerer! Du klarte det på ${forsøk}. forsøk.</h1> <br/>
    <button onclick = mainScreen()>Spel igjen?</button
    `
} 
}

