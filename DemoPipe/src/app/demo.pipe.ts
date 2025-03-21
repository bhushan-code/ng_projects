import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demo',
  standalone: true
})
export class DemoPipe implements PipeTransform 
{

  transform(value: unknown, ...args: unknown[]): unknown
  {
    var str;
    if(args[0] == "PPA")
    {
      str = value + "Batch that covers Fundamental of Programming";
    }
    
    else if(args[0] == "LB")
    {
      str = value + "Batch that covers Programming Logic";
    }
      
    else if(args[0] == "AM")
    {
      str = value + "Batch that covers Web Development";
    }
    else
    {
      str = "Sorry we dont have that batch"
    }
   return str;
  }

}
