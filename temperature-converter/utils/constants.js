import { TemperatureConverter } from "../Components/TemperatureConverterClass.js"
const form = document.querySelector('.form');
const fahrenheit = document.querySelector("#fahrenheit");
const celsius = document.querySelector("#celsius");
const kelvin = document.querySelector("#kelvin");
const formInputData = [fahrenheit, celsius, kelvin];
export const TempConverter = new TemperatureConverter(form, formInputData);