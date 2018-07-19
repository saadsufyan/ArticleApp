import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddarticlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addarticle',
  templateUrl: 'addarticle.html',
})
export class AddarticlePage {

  public editData 
  public name
  public description
  public image

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddarticlePage');
    this.editData = this.navParams.get('data')
    console.log(this.editData)

    if(this.editData != null){
      this.name = this.editData.name
      this.description = this.editData.description
      this.image = this.editData.image
    }
  }

}
