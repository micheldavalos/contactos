import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ContactoPage} from "../contacto/contacto";
import {ViewPage} from "../view/view";
import {Storage} from "@ionic/storage";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  contactoPage = ContactoPage;
  viewPage = ViewPage;
  avatar = 0;
  contactos = [];

  constructor(public navCtrl: NavController,
              public storage: Storage) {
    // this.storage.get('contactos')
    //   .then((val) => {
    //     console.log('entro');
    //   })
    //   .catch((val) => {
    //     console.log('error');
    //   });

    this.storage.keys()
      .then(keys => {
        if (keys.some(element => element == 'contactos')) {
          this.storage.get('contactos')
            .then(value => {
              console.log(value);
              this.contactos = JSON.parse(value);
              this.avatar = this.contactos.length;
            })
            .catch(reason => {
              console.log(reason);
            });
        }
      });

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
