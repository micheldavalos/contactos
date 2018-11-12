import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ContactoPage} from "../contacto/contacto";
import {ViewPage} from "../view/view";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  contactoPage = ContactoPage;
  viewPage = ViewPage;
  avatar = 1;
  contactos = [];

  constructor(public navCtrl: NavController) {

  }

  clickAdd() {
    this.avatar += this.avatar % 21;

    this.navCtrl.push(this.contactoPage,
      {
        contactos: this.contactos,
        avatar: '../assets/imgs/' + this.avatar.toString() + '.jpg'
      });
  }

  clickContacto(contacto: any) {
    this.navCtrl.push(this.viewPage, {'contacto': contacto})
  }
}
