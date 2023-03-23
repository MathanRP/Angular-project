import { Component, OnInit ,Input} from '@angular/core';
import { FilterItemPipe } from '../filter-item.pipe';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers:[FilterItemPipe]
  
})
export class FormComponent implements OnInit {
  @Input()
  messagelist: any[] = []; 
  result:any[]=[];
  id:string="";
  
  constructor() { }

  ngOnInit(): void {
    
  }
  arr:any[]=[];
  handler(a:any)
  {
    this.arr.push(a);
  }
  


}
