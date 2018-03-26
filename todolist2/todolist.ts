import { Component, OnInit, Input, Optional } from '@angular/core';
// import { GetDataService } from '../../services/get-data.service';
import { Router } from '@angular/router';
import {Http,Jsonp,Headers} from '@angular/http';
@Component({
  selector: 'app-todotlist',
  templateUrl: './todotlist.html',
  styleUrls: ['./todotlist.css']
})
export class GoodslistComponent implements OnInit {

  constructor(public router:Router,public http:Http,public jsonp:Jsonp) {}
  
  list:number[]=[1,2,3,4,5];
  // @Input() list:Array<any>;  注意命名冲突
    ngOnInit() {//用来初始化数据
    console.log('init');    
  //   this.getdata.addData(10);
  //   this.getdata.addData(90);
  //   console.log(this.getdata.list);
  //http get
  // this.http.get('http://datainfo.duapp.com/shopdata/getclass.php').subscribe(data=>{
  //   console.log(JSON.parse(data['_body']));
  //   this.list=JSON.parse(data['_body']);
  // },err=>{
  //   console.log(err);
  // })
  
  //jsonp 只有get请求
  this.jsonp.get('http://datainfo.duapp.com/shopdata/getGoods.php?callback=JSONP_CALLBACK').subscribe(data=>{
    console.log(data['_body']);
    this.list=data['_body'];
  },err=>{
    console.log(err);
  })

    }

  goDetail(idx){
    this.router.navigate(['/goodslist/gooddetail',idx]);
    //this.router.navigate(['/goodslist/gooddetail',idx],{queryParams:{num:100}});
  }
}