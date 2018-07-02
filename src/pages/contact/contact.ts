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

  //metodos//
 private setupPageTitle(){
   this.title = this.navParams.data.contact ? 'Contacto Modificado' : 'Nuevo Contacto';
 }

 //formulario para ingresar datos, con validacion de caracteres//
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
       this.toast.create({message: 'Contacto Guardado con Exito.', duration: 3000}).present();
       this.navCtrl.pop();

     })
     .catch((e) => {
      this.toast.create({message: 'Error al guardar Contacto.', duration: 3000}).present();
      console.error(e);

     });
   }
   
 }

}
