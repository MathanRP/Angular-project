import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterItem'
})
export class FilterItemPipe implements PipeTransform {
  
  transform(value: any, matcher:string) {
    if(value.length===0 || matcher==="" ){
      return value;
    }
    else{
    let array=[];
   for(let user of value){
     if (user.name.includes(matcher)){
       array.push(user);
     }
   } 
   return array;
  }

}
}
