import { Component, OnInit } from '@angular/core';
import {Dispositif} from '../dispositif';
import {SharedService} from '../shared/shared.service';
import {Router} from '@angular/router';
import {DispositifService} from '../dispositif.service';

@Component({
  selector: 'app-dispositifs-edit',
  templateUrl: './dispositifs-edit.component.html',
  styleUrls: ['./dispositifs-edit.component.css']
})
export class DispositifsEditComponent implements OnInit {

  myDispositif: Dispositif;
  selectedLevel;
  notCompleted:Boolean=false;

  data:Array<Object> = [
    {id: 0, name: "Oui"},
    {id: 1, name: "Non"}
  ];

  constructor(private shared:SharedService, private dispositifService : DispositifService, private router: Router) { }

  ngOnInit(): void {
    this.myDispositif=this.shared.getMessage();
    if(this.myDispositif.treated){
      this.selectedLevel=this.data[0];
    }
    else{
      this.selectedLevel=this.data[1]
    }
  }

  getName(x){
    this.myDispositif.name=x.value;
    console.log(this.myDispositif);

  }

  getComment(x){
    this.myDispositif.comment=x.value;
    console.log(this.myDispositif);
  }

  getAuthor(x){
    this.myDispositif.author=x.value;
    console.log(this.myDispositif);
  }

  selected(){
    if(this.selectedLevel.name=="Oui"){
      this.myDispositif.treated=true;
    }
    if(this.selectedLevel.name=="Non"){
      this.myDispositif.treated=false;
    }
    console.log(this.selectedLevel.name)
  }


  onUpdate(){
    if(!this.selectedLevel || !this.myDispositif.author || !this.myDispositif.name ){
      this.notCompleted=true;
    }
    else{
      this.myDispositif.date=new Date().toLocaleDateString();
      this.dispositifService.updateDispositif(this.myDispositif,this.myDispositif.id).subscribe(data=>{
        this.router.navigate(['/dispositifs'])
      }),error =>{
        console.log(error);
      }
    }
  }

}
