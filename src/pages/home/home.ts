import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddarticlePage } from '../addarticle/addarticle';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items :any = [
    {
      "id": 1,
      "name": "product1",
      "description": "des",
      "image": "../../assets/imgs/tshirt.jpg"
    },
    {
      "id": 2,
      "name": "product2",
      "description": "des",
      "image": "../../assets/imgs/tshirt1.jpg"
    },
    {
      "id": 3,
      "name": "product3",
      "description": "des",
      "image": "../../assets/imgs/tshirt2.jpg"
    },
    {
      "id": 4,
      "name": "product4",
      "description": "des",
      "image": "../../assets/imgs/tshirt3.png"
    },
  ]
  constructor(public navCtrl: NavController) {

  }


  goToAddArticle(){
    this.navCtrl.push(AddarticlePage)
  }

  updateArticle(id){
    console.log(this.items[id])
    this.navCtrl.push(AddarticlePage,{data: this.items[id]})
  }

}
