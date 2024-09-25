function calculateFutureReading() {
    const startDateInput = document.getElementById('startDate').value;
    const startReadingInput = document.getElementById('startReading').value;
    const currentDateInput = document.getElementById('currentDate').value;
    const currentReadingInput = document.getElementById('currentReading').value;
    const futureDateInput = document.getElementById('futureDate').value;

    const resultElement = document.getElementById('result');

    if (!startDateInput || !startReadingInput || !currentDateInput || !currentReadingInput || !futureDateInput) {
        resultElement.innerText = "Bitte füllen Sie alle Felder aus."; 
        resultElement.style.color = "#e4002b";
        return;
    }

    const startDate = new Date(startDateInput.split('.').reverse().join('-'));
    const startReading = parseFloat(startReadingInput);

    const currentDate = new Date(currentDateInput.split('.').reverse().join('-'));
    const currentReading = parseFloat(currentReadingInput);

    const futureDate = new Date(futureDateInput.split('.').reverse().join('-'));

    const daysPassed = (currentDate - startDate) / (1000 * 60 * 60 * 24);
    const dailyUsage = (currentReading - startReading) / daysPassed;

    const daysToFuture = (futureDate - currentDate) / (1000 * 60 * 60 * 24);
    const futureReading = currentReading + (dailyUsage * daysToFuture);

    resultElement.innerText = `Geschätzter Zählerstand am ${futureDate.toLocaleDateString('de-DE')}: ${futureReading.toFixed(2)}`;
    resultElement.style.color = "#ffffff"; 
}

function index() {
    window.location.href = "index.html";
}
