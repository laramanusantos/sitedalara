function calculateIMC() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let resultElement = document.getElementById("imcResult");

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        resultElement.textContent = "Por favor, insira valores válidos.";
        resultElement.style.color = "#ff3366";
        return;
    }

    let imc = weight / (height * height);
    let imcCategory = "";

    if (imc < 18.5) {
        imcCategory = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        imcCategory = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        imcCategory = "Sobrepeso";
    } else {
        imcCategory = "Obesidade";
    }

    resultElement.textContent = `IMC: ${imc.toFixed(2)} - ${imcCategory}`;
    resultElement.style.color = "#00c853";
}
