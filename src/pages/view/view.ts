import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage {

  contacto: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.contacto = this.navParams.get('contacto');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPage');
  }

}
