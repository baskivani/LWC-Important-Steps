import { LightningElement } from 'lwc';

export default class A02CiftYonluBinding extends LightningElement {

// Cift Yonlu Binding
ad ='Benim adim burada yazilacak'  
handleChange(event) {

        this.ad =event.target.value
    }
}
