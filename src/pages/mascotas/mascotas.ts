import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MascotasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mascotas',
  templateUrl: 'mascotas.html'
})
export class MascotasPage {
 
  public tap: number = 0;
 

  constructor(public navCtrl: NavController, public navParams: NavParams ) {
  }

  tapEvent(e) {
    this.tap++
}

  
}
