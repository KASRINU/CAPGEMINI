import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
public details :any = [];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    var values = this.http.get('https://jsonplaceholder.typicode.com/posts');
     values.subscribe(
      (response)=>{
        this.details =response;
      }
     )
  }



}
