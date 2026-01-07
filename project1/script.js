function calBmi(){
    let weight = prompt("Enter your weight:");
    let height = prompt("Enter your height:");

    weight = parseFloat(weight);
    height = parseFloat(height);

    let heightcm = height / 100; // converting cm to meters
    let bmi = weight / (heightcm * heightcm);

    document.getElementById("result").innerText = "Your BMI is: " + bmi.toFixed(2);

    if (bmi < 18.5) {
        document.getElementById("result").innerText += " (Underweight)";
    } else if (bmi < 24.9) {
        document.getElementById("result").innerText += " (Normal weight)";
    } else if (bmi < 29.9) {
        document.getElementById("result").innerText += " (Overweight)";
    } else {
        document.getElementById("result").innerText += " (Obesity)";
    }
}