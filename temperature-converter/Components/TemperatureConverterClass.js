import { convertTemp } from "../utils/utils.js";
export class TemperatureConverter {
    constructor(form, inputData, outputData){
        this.form = form;
        this.inputData = inputData;
        this.outputData = outputData;
    }
    submitHandler(){
        this.form.addEventListener('submit', (event) => {
            event.preventDefault();
            convertTemp();
        })
    }
}