import { LightningElement } from 'lwc';

export default class A04ConditionalRendering extends LightningElement {
//conditonal rendering
sart1 = true
sart2 = false

// Conditional Rendering Buton Ekleme

flag = false

handleClick(){

    this.flag =!this.flag
}


}
