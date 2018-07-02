import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ContactProvider } from './../../providers/contact/contact';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
title: string;
form: FormGroup;
contact: any;

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder, private provider: ContactProvider,
    private toast: ToastController) {

      //this.contact = this.navParams.data.contact || {};
      //this.createForm();

      if (this.navParams.data.key) {
        const subcribe = this.provider.get(this.navParams.data.key)
        .subscribe((c: any) => {
          subcribe.unsubscribe();

          this.contact = c;
          this.createForm();
        })

      } else {
        this.contact = {};
        this.createForm();
      }

      this.setupPageTitle();
  }

 private setupPageTitle(){
<<<<<<< HEAD
   this.title = this.navParams.data.contact ? 'Alterado contato' : 'Novo contato';
=======
   this.title = this.navParams.data.contact ? 'Contacto Modificado' : 'Nuevo Contacto';
>>>>>>> 2f883100f91c6c5451e95a9aa6d382ecc8e80b23
 }

 createForm() {
   this.form = this.formBuilder.group({
     key: [this.contact.key],
     name: [this.contact.name, Validators.required],
     tel: [this.contact.tel, Validators.required],
   });
 }

 onSubmit() {
   if (this.form.valid) {
     this.provider.save(this.form.value)
     .then(() => {
<<<<<<< HEAD
       this.toast.create({message: 'Contato salvo com sucesso.', duration: 3000}).present();
=======
       this.toast.create({message: 'Contacto Guardado con Exito.', duration: 3000}).present();
>>>>>>> 2f883100f91c6c5451e95a9aa6d382ecc8e80b23
       this.navCtrl.pop();

     })
     .catch((e) => {
<<<<<<< HEAD
      this.toast.create({message: 'error ao salvo com sucesso.', duration: 3000}).present();
=======
      this.toast.create({message: 'Error al guardar Contacto.', duration: 3000}).present();
>>>>>>> 2f883100f91c6c5451e95a9aa6d382ecc8e80b23
      console.error(e);

     });
   }
   
 }

}
