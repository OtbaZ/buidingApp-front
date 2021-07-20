import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AssainissementService} from '../assainissement.service';
import {Assainissement} from '../assainissement';

@Component({
  selector: 'app-assainissements-forms',
  templateUrl: './assainissements-forms.component.html',
  styleUrls: ['./assainissements-forms.component.css']
})
export class AssainissementsFormsComponent implements OnInit {

  myAssainissement: Assainissement;
  selectedLevel;
  notCompleted:Boolean=false;

  data:Array<Object> = [
    {id: 0, name: "Oui"},
    {id: 1, name: "Non"}
  ];


  constructor(private assainissementService : AssainissementService, private router: Router) {
    this.myAssainissement=new Assainissement();
  }

  ngOnInit(): void {
  }

  getName(x){
    this.myAssainissement.name=x.value;
    console.log(this.myAssainissement);

  }

  getComment(x){
    this.myAssainissement.comment=x.value;
    console.log(this.myAssainissement);
  }

  getAuthor(x){
    this.myAssainissement.author=x.value;
    console.log(this.myAssainissement);
  }

  selected(){
    if(this.selectedLevel.name=="Oui"){
      this.myAssainissement.treated=true;
    }
    if(this.selectedLevel.name=="Non"){
      this.myAssainissement.treated=false;
    }
    console.log(this.selectedLevel.name)
  }


  onSave(){
    if(!this.selectedLevel || !this.myAssainissement.author || !this.myAssainissement.name ){
      this.notCompleted=true;
    }
    else{
      this.myAssainissement.date=new Date().toLocaleDateString();
      this.assainissementService.postAssainissement(this.myAssainissement).subscribe(data=>{
        this.router.navigate(['/assainissements'])
      }),error =>{
        console.log(error);
      }
    }
  }
}
