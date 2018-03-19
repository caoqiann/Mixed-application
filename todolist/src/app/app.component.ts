import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data:string;
  dataArr=[];
  dataA=[];

  add(){
    this.dataArr.push(this.data);
    this.data="";

  }
  changeData(i){
    this.dataA.push(this.dataArr[i]);
    this.dataArr.splice(i,1);
    console.log(i);
  } 
}
