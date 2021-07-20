import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DispositifService} from '../dispositif.service';
import {Dispositif} from '../dispositif';

@Component({
  selector: 'app-dispositifs-forms',
  templateUrl: './dispositifs-forms.component.html',
  styleUrls: ['./dispositifs-forms.component.css']
})
export class DispositifsFormsComponent implements OnInit {

  myDispositif: Dispositif;
  selectedLevel;
  notCompleted:Boolean=false;

  data:Array<Object> = [
    {id: 0, name: "Oui"},
    {id: 1, name: "Non"}
  ];


  constructor(private dispositifService : DispositifService, private router: Router) {
    this.myDispositif=new Dispositif();
  }

  ngOnInit(): void {
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


  onSave(){
    if(!this.selectedLevel || !this.myDispositif.author || !this.myDispositif.name ){
      this.notCompleted=true;
    }
    else{
      this.myDispositif.date=new Date().toLocaleDateString();
      this.dispositifService.postDispositif(this.myDispositif).subscribe(data=>{
        this.router.navigate(['/dispositifs'])
      }),error =>{
        console.log(error);
      }
    }
  }
}

