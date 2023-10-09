function convertTemperature() {
    var temperatureInput = parseFloat(document.getElementById("temperatureInput").value);
    var unitSelect = document.getElementById("unitSelect");
    var selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;
    var resultElement = document.getElementById("result");

    if (selectedUnit === "celsius") {
        var celsius = (temperatureInput - 32) * 5/9;
        resultElement.innerText = " Celsius for the value " + temperatureInput + " is " + celsius ;
    } else if (selectedUnit === "fahrenheit") {
        var fahrenheit = (temperatureInput - 273.15) * 9/5 + 32;
        resultElement.innerText = " Fahrenheit for the value " + temperatureInput + " is " + fahrenheit ;
    } else {
        var kelvin = (temperatureInput - 32) * 5/9 + 273.15;
        resultElement.innerText = " Kelvin for the value " + temperatureInput + " is " + kelvin ;
    }
}
