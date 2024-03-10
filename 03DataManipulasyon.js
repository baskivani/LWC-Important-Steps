import { LightningElement } from 'lwc';

export default class A03dataManipulation extends LightningElement {
    // Data Manipulasyon
    ilkIsim ='Benim adim burada yazilacak'  
handleilkIsim(event) {

        this.ilkIsim =(event.target.value).toUpperCase()
    }

    //get methodu (get ile set kardestir)

    ilkIsimGet ='Benim adim burada yazilacak'  
handleilkIsimGet(event) {

        this.ilkIsimGet =event.target.value
    }

    container
  get  getIlkIsim(){

this.container =this.ilkIsimGet
this.container = this.container.toLowerCase();
this.container = this.container.charAt(0).toUpperCase() + this.  container.slice(1)

return this.container
    }
}
