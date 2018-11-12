import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  avatar = 1;
  contactos = [
    {
      'id': '',
      'avatar': '',
      'nombre': '',
      'correo': '',
      'tel': ''
    }];

  constructor(public navCtrl: NavController) {

  }

}
