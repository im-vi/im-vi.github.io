setInterval(setOneUpper, 150);

function setOneUpper() {
    let poss = ["Work in progress", "wOrk in progress", "woRk in progress", "worK in progress", "work In progress", "work iN progress", "work in Progress", "work in pRogress", "work in prOgress", "work in proGress", "work in progRess", "work in progrEss", "work in progreSs", "work in progresS", "work in progress"]
    var randomIndex = Math.floor(Math.random() * poss.length);
    let randomString = poss[randomIndex];
    document.getElementById("wip").textContent = randomString
}