import { Component, OnInit } from '@angular/core';
import {OuvragesService} from '../ouvrages.service';
import {Router} from '@angular/router';
import {Chausse} from '../chausse';
import {ChausseService} from '../chausse.service';

@Component({
  selector: 'app-chausses-forms',
  templateUrl: './chausses-forms.component.html',
  styleUrls: ['./chausses-forms.component.css']
})
export class ChaussesFormsComponent implements OnInit {


  myChausse: Chausse;
  selectedLevel;
  notCompleted:Boolean=false;

  data:Array<Object> = [
    {id: 0, name: "Oui"},
    {id: 1, name: "Non"}
  ];


  constructor(private chausseService : ChausseService, private router: Router) {
    this.myChausse=new Chausse();
  }

  ngOnInit(): void {
  }

  getName(x){
    this.myChausse.name=x.value;
    console.log(this.myChausse);

  }

  getComment(x){
    this.myChausse.comment=x.value;
    console.log(this.myChausse);
  }

  getAuthor(x){
    this.myChausse.author=x.value;
    console.log(this.myChausse);
  }

  selected(){
    if(this.selectedLevel.name=="Oui"){
      this.myChausse.treated=true;
    }
    if(this.selectedLevel.name=="Non"){
      this.myChausse.treated=false;
    }
    console.log(this.selectedLevel.name)
  }


  onSave(){
    if(!this.selectedLevel || !this.myChausse.author || !this.myChausse.name ){
      this.notCompleted=true;
    }
    else{
      this.myChausse.date=new Date().toLocaleDateString();
      this.chausseService.postChausse(this.myChausse).subscribe(data=>{
        this.router.navigate(['/chausses'])
      }),error =>{
        console.log(error);
      }
    }
  }
}

