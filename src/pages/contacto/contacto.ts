import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AlertController} from "ionic-angular";

/**
 * Generated class for the ContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacto',
  templateUrl: 'contacto.html',
})
export class ContactoPage {

  nombre = '';
  telefono = '';
  email = '';
  facebook = '';
  twitter = '';
  instagram = '';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtr: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactoPage');
  }

  clickAgregar() {
    let contactos = this.navParams.get('contactos');
    let avatar = this.navParams.get('avatar');

    if (this.nombre.length == 0 || this.telefono.length == 0) {
      const alert = this.alertCtr.create(
        {
          title: 'Oops!',
          subTitle: 'El contacto debe de tener nombre y teléfono',
          buttons: ['OK']

        }
      );
      alert.present();
    }
    else {
      contactos.push(
        {
          'avatar': avatar,
          'nombre': this.nombre,
          'correo': this.email,
          'telefono': this.telefono,
          'facebook': this.facebook,
          'twitter': this.twitter,
          'instagram': this.instagram
        }
      );
      this.navCtrl.pop();
    }
  }

}
