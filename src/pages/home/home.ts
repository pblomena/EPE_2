import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { ContactProvider } from './../../providers/contact/contact';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  contacts: Observable<any>;

  constructor(public navCtrl: NavController, private provider: ContactProvider,
  private toast: ToastController) {

    this.contacts = this.provider.getAll();

  }
// metodos//
  newContact() {
    this.navCtrl.push('ContactEditPage');
  }
editContact(contact: any) {
  this.navCtrl.push('ContactEditPage', {contact: contact});
 


}
removeContact(key: string) {
  if (key){
  this.provider.remove(key)
  .then(() => {
    this.toast.create({ message: 'Contacto Removido Exitosamente.', duration: 3000}).present();

  })
  .catch((e) => {
    this.toast.create({ message: 'Error al remover Contacto.', duration: 3000}).present();

  })

}
}
}