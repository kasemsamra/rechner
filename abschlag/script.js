function toggleContent(num) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.style.display = 'none';
    });

    const content = document.getElementById(`content-${num}`);
    content.style.display = 'block';
}

window.onload = function() {
    document.getElementById('content-1').style.display = 'block';
};

function calculate() {
    const verbrauchInput = document.getElementById('verbrauch').value.replace(',', '.');
    const arbeitspreisInput = document.getElementById('arbeitspreis').value.replace(',', '.');
    const grundpreisInput = document.getElementById('grundpreis').value.replace(',', '.');

    if (!verbrauchInput || !arbeitspreisInput || !grundpreisInput) {
     
        document.getElementById('summe-jaehrlich').innerText = '';
        document.getElementById('abschlag-11').innerText = '';
        document.getElementById('abschlag-12').innerText = '';
        return;
    }

    const verbrauch = parseFloat(verbrauchInput);
    const arbeitspreis = parseFloat(arbeitspreisInput);
    const grundpreis = parseFloat(grundpreisInput);
    const summeJaehrlich = (verbrauch * arbeitspreis / 100) + grundpreis;
    const abschlag11 = summeJaehrlich / 11;
    const abschlag12 = summeJaehrlich / 12;
    document.getElementById('summe-jaehrlich').innerText = summeJaehrlich.toFixed(2).replace('.', ',');
    document.getElementById('abschlag-11').innerText = Math.round(abschlag11).toString().replace('.', ',');
    document.getElementById('abschlag-12').innerText = Math.round(abschlag12).toString().replace('.', ',');
}


function calculateHTNT() {
    const htVerbrauchInputNT = document.getElementById('ht-verbrauch-nt').value.replace(',', '.');
    const htArbeitspreisInputNT = document.getElementById('ht-arbeitspreis-nt').value.replace(',', '.');
    const ntVerbrauchInputNT = document.getElementById('nt-verbrauch-nt').value.replace(',', '.');
    const ntArbeitspreisInputNT = document.getElementById('nt-arbeitspreis-nt').value.replace(',', '.');
    const grundpreisInputNT = document.getElementById('grundpreis-nt').value.replace(',', '.');

    if (!htVerbrauchInputNT || !htArbeitspreisInputNT || !ntVerbrauchInputNT || !ntArbeitspreisInputNT || !grundpreisInputNT) {
        document.getElementById('summe-jaehrlich-nt').innerText = '';
        document.getElementById('abschlag-11-nt').innerText = '';
        document.getElementById('abschlag-12-nt').innerText = '';
        return;
    }

    const htVerbrauchNT = parseFloat(htVerbrauchInputNT);
    const htArbeitspreisNT = parseFloat(htArbeitspreisInputNT);
    const ntVerbrauchNT = parseFloat(ntVerbrauchInputNT);
    const ntArbeitspreisNT = parseFloat(ntArbeitspreisInputNT);
    const grundpreisNT = parseFloat(grundpreisInputNT);

    const summeJaehrlichNT = ((htVerbrauchNT * htArbeitspreisNT) / 100) + ((ntVerbrauchNT * ntArbeitspreisNT) / 100) + grundpreisNT;
    const abschlag11NT = summeJaehrlichNT / 11;
    const abschlag12NT = summeJaehrlichNT / 12;

    console.log(`Summe jährlich NT: ${summeJaehrlichNT}`);
    
    document.getElementById('summe-jaehrlich-nt').innerText = summeJaehrlichNT.toFixed(2).replace('.', ',');
    document.getElementById('abschlag-11-nt').innerText = Math.round(abschlag11NT).toString().replace('.', ',');
    document.getElementById('abschlag-12-nt').innerText = Math.round(abschlag12NT).toString().replace('.', ',');
}



function calculateGas() {
    const verbrauchInput = document.getElementById('gas-verbrauch').value.replace(',', '.');
    const arbeitspreisInput = document.getElementById('gas-arbeitspreis').value.replace(',', '.');
    const grundpreisInput = document.getElementById('gas-grundpreis').value.replace(',', '.');
    if (!verbrauchInput || !arbeitspreisInput || !grundpreisInput) {
        document.getElementById('gas-summe-jaehrlich').innerText = '';
        document.getElementById('gas-abschlag-11').innerText = '';
        document.getElementById('gas-abschlag-12').innerText = '';
        return;
    }

    const verbrauch = parseFloat(verbrauchInput);
    const arbeitspreis = parseFloat(arbeitspreisInput);
    const grundpreis = parseFloat(grundpreisInput);
    const summeJaehrlich = (verbrauch * arbeitspreis / 100) + grundpreis;
    const abschlag11 = summeJaehrlich / 11;
    const abschlag12 = summeJaehrlich / 12;
    document.getElementById('gas-summe-jaehrlich').innerText = summeJaehrlich.toFixed(2).replace('.', ',');
    document.getElementById('gas-abschlag-11').innerText = Math.round(abschlag11).toString().replace('.', ',');
    document.getElementById('gas-abschlag-12').innerText = Math.round(abschlag12).toString().replace('.', ',');
}














function index() {
    window.location.href = "index.html";
}
