function checkAnswers() {
    let ageAnswer = document.querySelector('input[name="age"]:checked');
    let schoolAnswer = document.querySelector('input[name="school"]:checked');
    let religionAnswer = document.querySelector('input[name="religion"]:checked');
    let hobbyAnswer = document.querySelector('input[name="hobby"]:checked');

    let resultText = "Resultado do Quiz:\n\n";
    let score = 0;

    if (ageAnswer && ageAnswer.value === "15") {
        score++;
        resultText += "1. Idade: Correto!\n";
    } else {
        resultText += "1. Idade: Errado\n";
    }

    if (schoolAnswer && schoolAnswer.value === "ifpe") {
        score++;
        resultText += "2. Onde estuda: Correto!\n";
    } else {
        resultText += "2. Onde estuda: Errado\n";
    }

    if (religionAnswer && religionAnswer.value === "catolica") {
        score++;
        resultText += "3. Religião: Correto!\n";
    } else {
        resultText += "3. Religião: Errado\n";
    }

    if (hobbyAnswer && hobbyAnswer.value === "viajar") {
        score++;
        resultText += "4. Hobby: Correto!\n";
    } else {
        resultText += "4. Hobby: Errado\n";
    }

    let finalMessage = `Você acertou ${score} de 4 questões!`;

    if (score === 4) {
        resultText += "\nParabéns! Você acertou tudo!";
    } else if (score >= 2) {
        resultText += "\nBom trabalho, você acertou a maioria!";
    } else {
        resultText += "\nTente novamente!";
    }

    document.getElementById("result").textContent = resultText;
}
