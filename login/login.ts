import { Component,NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http,Headers } from '@angular/http';


@IonicPage()
@Component({
  selector: 'page-person',
  templateUrl: 'person.html',
})
export class PersonPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,public http:Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonPage');
  }

  txt:string;
  pwd:string;


  headers = new Headers( {'Content-Type':'application/x-www-form-urlencoded'} );

  showAlert(){
    this.http.post('http://datainfo.duapp.com/shopdata/userinfo.php',({status:'login',userID:this.txt,password:this.pwd}),{headers:this.headers}).subscribe(data=>{
      console.log(data['_body']);

        if(data['_body']==0){
          let alert = this.alertCtrl.create({
            title: 'ERROR!',
            subTitle: '用户名不存在!',
            buttons: ['OK']
          });
          alert.present();
          // console.log('用户名不存在!');
        }

        if(data['_body']==2){
          let alert = this.alertCtrl.create({
            title: 'ERROR!',
            subTitle: '用户名密码不符!',
            buttons: ['OK']
          });
          alert.present();
          // console.log('用户名密码不符!');
        }

        else{
          let alert = this.alertCtrl.create({
            title: 'SUCCESS!',
            subTitle: '登陆成功!',
            buttons: ['OK']
          });
          alert.present();
          // console.log('登陆成功!');
        }   
    }),err=>{
      console.log(err);
    };
  };

}