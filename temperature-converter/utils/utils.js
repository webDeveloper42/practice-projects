function convertTemp(inputList){
    const [fahrenheit, celsius, kelvin] = inputList;
    let existedInput;
    for(const input of inputList){
        if(input.value !== ""){
            existedInput = input;
        }
    }
    if(existedInput.id === "celsius"){
        celsiusExist(fahrenheit, kelvin, existedInput.value);
    }else if(existedInput.id === "fahrenheit"){
        fahrenheitExist(celsius, kelvin, existedInput.value);
    }else if(existedInput.id === "kelvin"){
        kelvinExist(celsius, fahrenheit, existedInput.value);
    }
}
function celsiusExist(fahrenheitInput, kelvinInput, existedInputValue){
    let toFahrenheit = (existedInputValue * 9/5) + 32 ;
    fahrenheitInput.value = toFahrenheit.toFixed(2);
    let toKelvin = existedInputValue + 273.15;
    kelvinInput.value = toKelvin.toFixed(2);
}
function fahrenheitExist(celsiusInput, kelvinInput, existedInputValue){
    let toCelsius = (existedInputValue - 32) * 5/9 ;
    celsiusInput.value = toCelsius.toFixed(2);
    let toKelvin = (existedInputValue - 32) * 5/9 + 273.15;
    kelvinInput.value = toKelvin.toFixed(2);
}
function kelvinExist(fahrenheit, celsius, existedInputValue){
    let toFahrenheit = (existedInputValue - 273.15) * 9/5 + 32;
    fahrenheit.value = toFahrenheit.toFixed(2);
    let toCelsius = existedInputValue - 273.15;
    celsius.value = toCelsius.toFixed(2);
}

export function renderTemps(inputData){
    convertTemp(inputData);
}

