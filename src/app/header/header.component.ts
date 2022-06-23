import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  public fromLocation:string = 'Mumbai';
  public toLocation:string = 'Delhi';
  public borderValue:string = '0';

 public changeBorder():void{
   this.borderValue = '1';
 }



}
