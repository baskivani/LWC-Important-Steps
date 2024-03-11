import { LightningElement } from 'lwc';

export default class A05ParaloSorgulaWithConditoanalRendering extends LightningElement {

    // Parola Sorgula 

flag = false
inputParola= ''
parola = 'Alaz'

    handleChange(e){

     this.inputParola =e.target.value
     if (this.parola==this.inputParola){

        this.flag=true
     } else {
        this.flag =false
     }


    }
}
