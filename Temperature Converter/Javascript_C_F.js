document.addEventListener("DOMContentLoaded", function () {
    const celsiusInput = document.getElementById("celsiusInput");
    const fahrenheitInput = document.getElementById("fahrenheitInput");
    const celsiusToFarButton = document.getElementById("celsiusToFarButton");
    const farToCelsiusButton = document.getElementById("farToCelsiusButton");
    const result = document.getElementById("result");

    celsiusToFarButton.addEventListener("click", function () {
        const celsius = parseFloat(celsiusInput.value);
        if (!isNaN(celsius)) {
            const fahrenheit = (celsius * 9/5) + 32;
            result.textContent = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`;
        } else {
            result.textContent = "Please enter a valid Celsius value.";
        }
    });

    farToCelsiusButton.addEventListener("click", function () {
        const fahrenheit = parseFloat(fahrenheitInput.value);
        if (!isNaN(fahrenheit)) {
            const celsius = (fahrenheit - 32) * 5/9;
            result.textContent = `${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C`;
        } else {
            result.textContent = "Please enter a valid Fahrenheit value.";
        }
    });
});
