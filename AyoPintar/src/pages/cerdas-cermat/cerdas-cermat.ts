import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CerdasCermatSoalPage } from '../cerdas-cermat-soal/cerdas-cermat-soal';

/**
 * Generated class for the CerdasCermatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cerdas-cermat',
  templateUrl: 'cerdas-cermat.html',
})
export class CerdasCermatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CerdasCermatPage');
  }

  gotoCerdasCermatSoal(){
    this.navCtrl.push(CerdasCermatSoalPage);
  }


}
