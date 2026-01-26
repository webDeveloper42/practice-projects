import { renderTemps } from "../utils/utils.js";
export class TemperatureConverter {
    constructor(form, inputData){
        this.form = form;
        this.inputData = inputData;
    }
    initialize(){
        this.form.addEventListener('submit', (event) => {
            event.preventDefault();
            renderTemps(this.inputData);
        })
    }
}