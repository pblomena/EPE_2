import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  irMascotas(){
    this.navCtrl.push('MascotasPage');
  }

  irHome(){
    this.navCtrl.push(HomePage);
  }
  
  irNosotros(){
    this.navCtrl.push('NosotrosPage');
  }

  

}
