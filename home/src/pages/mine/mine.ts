import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingPage } from '../setting/setting';
import { App } from 'ionic-angular';
/**
 * Generated class for the MinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html',
})
export class MinePage {
  settingPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, private app:App) {
    this.settingPage = SettingPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MinePage');
  }
  onClick() {
    this.app.getRootNav().push(SettingPage);
  }
}
