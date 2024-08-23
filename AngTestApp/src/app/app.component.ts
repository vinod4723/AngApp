import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { UpperCasePipe } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UpperCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit  {
  ngOnInit(): void {
    this.getMessage();
  }
  title = 'AngTestApp';
  
  AppComponent()
  {
    this.getMessage();
  }
 private broadcastMessage(observer:any) {

  var t1=setInterval(()=>{
    observer.next(Math.random()*10);
  },2000);
}
   public strName:string="00";
  public getMessage()
  {
   var observer = Observable.create(this.broadcastMessage);
    observer.subscribe((res:any)=>
      this.strName="adding after every 2 seconds: "+res
  );
  } 

  public ListenMsg(res:any):any
  {
    return res;
  }

}
