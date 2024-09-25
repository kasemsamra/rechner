function convertKWhToM3() {
    const kWh = parseFloat(document.getElementById('kWh').value);
    if (isNaN(kWh) || kWh <= 0) {
        document.getElementById('result').innerText = 'Bitte geben Sie einen gültigen kWh-Wert ein.';
        return;
    }
    const brennwert = 10;
    const zustandszahl = 1; 
    const gasverbrauch = kWh / (brennwert * zustandszahl);
    document.getElementById('result').innerText = `Gasverbrauch: ${gasverbrauch.toFixed(2)} m³`;
}





function index() {
    window.location.href = "index.html";
}
