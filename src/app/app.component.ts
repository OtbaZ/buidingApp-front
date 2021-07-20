import {Component, OnInit} from '@angular/core';
import {MyServiceService} from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public chausses;

  constructor(private myService : MyServiceService){

  }

  ngOnInit(): void {
    this.getChausses();
  }

  private getChausses(){
    this.myService.getRessource("chausses").subscribe(data =>{
      this.chausses=data;
    },error => {
      console.log(error);
    })
  }
}
