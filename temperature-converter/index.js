import { TemperatureConverter } from "./Components/TemperatureConverterClass.js"
const form = document.querySelector('.form');
const formInputData = document.querySelector('.form_input');
const formOutputData = document.querySelector('.form_input');
const TempConverter = new TemperatureConverter(form, formInputData, formOutputData);
TempConverter.submitHandler();