document.getElementById('price-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const stromNetto = parseFloat(document.getElementById('strom-netto').value);
    const stromGrundpreisNetto = parseFloat(document.getElementById('strom-grundpreis-netto').value);
    const gasNetto = parseFloat(document.getElementById('gas-netto').value);
    const gasGrundpreisNetto = parseFloat(document.getElementById('gas-grundpreis-netto').value);

    const mwst = 0.19; 

    if (!isNaN(stromNetto)) {
        const stromBrutto = (stromNetto * (1 + mwst)).toFixed(2);
        document.getElementById('strom-brutto').innerText = stromBrutto;
    } else {
        document.getElementById('strom-brutto').innerText = 'Keine Eingabe';
    }

    if (!isNaN(stromGrundpreisNetto)) {
        const stromGrundpreisBrutto = (stromGrundpreisNetto * (1 + mwst)).toFixed(2);
        document.getElementById('strom-grundpreis-brutto').innerText = stromGrundpreisBrutto;
    } else {
        document.getElementById('strom-grundpreis-brutto').innerText = 'Keine Eingabe';
    }

    if (!isNaN(gasNetto)) {
        const gasBrutto = (gasNetto * (1 + mwst)).toFixed(2);
        document.getElementById('gas-brutto').innerText = gasBrutto;
    } else {
        document.getElementById('gas-brutto').innerText = 'Keine Eingabe';
    }

    if (!isNaN(gasGrundpreisNetto)) {
        const gasGrundpreisBrutto = (gasGrundpreisNetto * (1 + mwst)).toFixed(2);
        document.getElementById('gas-grundpreis-brutto').innerText = gasGrundpreisBrutto;
    } else {
        document.getElementById('gas-grundpreis-brutto').innerText = 'Keine Eingabe';
    }
});


function index() {
    window.location.href = "index.html";
}
