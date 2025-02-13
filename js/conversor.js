function convertCelsius() {
    let celsius = parseFloat(document.getElementById("celsius").value);
    let resultElement = document.getElementById("celsiusResult");

    if (isNaN(celsius)) {
        resultElement.textContent = "Por favor, insira um valor válido.";
        resultElement.style.color = "#ff3366";
        return;
    }

    let fahrenheit = (celsius * 9/5) + 32;
    resultElement.textContent = `${celsius}°C = ${fahrenheit.toFixed(2)}°F`;
    resultElement.style.color = "#00c853";
}

function convertMeters() {
    let meters = parseFloat(document.getElementById("meters").value);
    let resultElement = document.getElementById("metersResult");

    if (isNaN(meters)) {
        resultElement.textContent = "Por favor, insira um valor válido.";
        resultElement.style.color = "#ff3366";
        return;
    }

    let centimeters = meters * 100;
    resultElement.textContent = `${meters}m = ${centimeters}cm`;
    resultElement.style.color = "#00c853";
}

function convertKilograms() {
    let kilograms = parseFloat(document.getElementById("kilograms").value);
    let resultElement = document.getElementById("kilogramsResult");

    if (isNaN(kilograms)) {
        resultElement.textContent = "Por favor, insira um valor válido.";
        resultElement.style.color = "#ff3366";
        return;
    }

    let pounds = kilograms * 2.20462;
    resultElement.textContent = `${kilograms}kg = ${pounds.toFixed(2)}lbs`;
    resultElement.style.color = "#00c853";
}
