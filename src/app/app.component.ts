import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 isVisible:boolean=false;
 value1:String="";
 name:String="";
 calories:String="";
 img_url:String="";
 container:boolean=false;
 messagelist:any = [];  
 handler(b:boolean){
  this.isVisible=true;
  this.container=false;
 }
 callme()
 {

this.isVisible=false;
this.container=true;
var object={
  id:1,
  name:this.name,
  calories:this.calories,
  ulr:this.img_url
};
console.log(object);
this.messagelist.push(
  object
);
this.name=""
this.calories=""
this.img_url=""
//this.name
 }

   

}