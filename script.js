let app = document.querySelector(".app");
let skrift = document.querySelector(".skrift");

let randomNumber;
let gjettaNummer;
let forsøk;

function mainScreen() {
    forsøk = 0;
    document.documentElement.style.backgroundImage = "linear-gradient(-20deg, #100259 0%, #365473 100%)";
    randomNumber = Math.floor(Math.random() * 10)
    app.innerHTML = /*HTML*/ `
    <h1 class="overskrift"> Gjett Nummer</h1>
    <div class="inputfelt">
        <input id="input" placeholder="Fra 0 til 10"><button onclick="gjett()">Gjett!</button>
    </div>
    `
}

mainScreen();

function gjett() {
    let input = document.getElementById("input").value;
    gjettaNummer = parseInt(input);
    

    if (gjettaNummer < randomNumber && gjettaNummer < 11) {
        forsøk ++;
        app.innerHTML += /*HTML*/ `
        <h1 class="skrift">${gjettaNummer}↑</h1> <br/>
        `
} else if (gjettaNummer > randomNumber && gjettaNummer < 11) {
    forsøk ++;
    app.innerHTML += /*HTML*/ `
    <h1 class="skrift">${gjettaNummer}↓</h1> <br/>
    `
} else if (gjettaNummer == randomNumber) {
    forsøk ++;
    document.documentElement.style.backgroundImage = "linear-gradient(-20deg, #01490b 0%, #00f014 100%)";
    app.innerHTML += /*HTML*/ `
    <h1 class="skrift">Gratulerer! Du klarte det på ${forsøk}. forsøk.</h1> <br/>
    <button onclick = mainScreen()>Spel igjen?</button
    `

} 
}


