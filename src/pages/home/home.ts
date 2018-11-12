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
  avatar = 4;
  contactos = [
    {
      'avatar': '../assets/imgs/3.jpg',
      'nombre': 'Michel Dávalos',
      'correo': 'mdavalos@cedi.edu.mx',
      'telefono': '(33) 11 22 33 44',
      'facebook': 'michel.prueba',
      'twitter': '@michel.prueba',
      'instagram': 'michel.insta'
    },
    {
      'avatar': '../assets/imgs/12.jpg',
      'nombre': 'Casandra Hernández',
      'correo': 'chernadez@cedi.edu.mx',
      'telefono': '(33) 55 66 77 88',
      'facebook': 'casandra.prueba',
      'twitter': '@cass.prueba',
      'instagram': 'cass.hern'
    },
    {
      'avatar': '../assets/imgs/1.jpg',
      'nombre': 'Rafael Guerrero',
      'correo': 'rguerrero@cedi.edu.mx',
      'telefono': '(33) 12 34 56 78',
      'facebook': 'rafa.warrior',
      'twitter': '@rafael.warrior',
      'instagram': 'rafa.warrior'
    }
  ];

  constructor(public navCtrl: NavController) {

  }

  clickAdd() {
    this.avatar += 1;
    this.avatar = this.avatar % 21;

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
