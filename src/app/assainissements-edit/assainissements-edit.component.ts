import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared/shared.service';
import {Router} from '@angular/router';
import {AssainissementService} from '../assainissement.service';
import {Assainissement} from '../assainissement';

@Component({
  selector: 'app-assainissements-edit',
  templateUrl: './assainissements-edit.component.html',
  styleUrls: ['./assainissements-edit.component.css']
})
export class AssainissementsEditComponent implements OnInit {

  myAssainissement: Assainissement;
  selectedLevel;
  notCompleted:Boolean=false;

  data:Array<Object> = [
    {id: 0, name: "Oui"},
    {id: 1, name: "Non"}
  ];

  constructor(private shared:SharedService, private assainissementService : AssainissementService, private router: Router) { }

  ngOnInit(): void {
    this.myAssainissement=this.shared.getMessage();
    if(this.myAssainissement.treated){
      this.selectedLevel=this.data[0];
    }
    else{
      this.selectedLevel=this.data[1]
    }
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


  onUpdate(){
    if(!this.selectedLevel || !this.myAssainissement.author || !this.myAssainissement.name ){
      this.notCompleted=true;
    }
    else{
      this.myAssainissement.date=new Date().toLocaleDateString();
      this.assainissementService.updateAssainissement(this.myAssainissement,this.myAssainissement.id).subscribe(data=>{
        this.router.navigate(['/assainissements'])
      }),error =>{
        console.log(error);
      }
    }
  }

}
