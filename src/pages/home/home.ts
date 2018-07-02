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

  newContact() {
    this.navCtrl.push('ContactEditPage');
  }
editContact(contact: any) {
  this.navCtrl.push('ContactEditPage', {contact: contact});
 //this.navCtrl.push('ContactEditPage', { key: contact.key});


}
removeContact(key: string) {
  if (key){
  this.provider.remove(key)
  .then(() => {
    this.toast.create({ message: 'contacto removido sucesso.', duration: 3000}).present();

  })
  .catch((e) => {
    this.toast.create({ message: 'error removido sucesso.', duration: 3000}).present();

  })

}
}
}