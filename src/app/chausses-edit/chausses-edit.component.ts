import { Component, OnInit } from '@angular/core';
import {Ouvrage} from '../ouvrage';
import {SharedService} from '../shared/shared.service';
import {OuvragesService} from '../ouvrages.service';
import {Router} from '@angular/router';
import {ChausseService} from '../chausse.service';

@Component({
  selector: 'app-chausses-edit',
  templateUrl: './chausses-edit.component.html',
  styleUrls: ['./chausses-edit.component.css']
})
export class ChaussesEditComponent implements OnInit {

  myChausse: Ouvrage;
  selectedLevel;
  notCompleted:Boolean=false;

  data:Array<Object> = [
    {id: 0, name: "Oui"},
    {id: 1, name: "Non"}
  ];

  constructor(private shared:SharedService, private chausseService : ChausseService, private router: Router) { }

  ngOnInit(): void {
    this.myChausse=this.shared.getMessage();
    if(this.myChausse.treated){
      this.selectedLevel=this.data[0];
    }
    else{
      this.selectedLevel=this.data[1]
    }
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


  onUpdate(){
    if(!this.selectedLevel || !this.myChausse.author || !this.myChausse.name ){
      this.notCompleted=true;
    }
    else{
      this.myChausse.date=new Date().toLocaleDateString();
      this.chausseService.updateChausse(this.myChausse,this.myChausse.id).subscribe(data=>{
        this.router.navigate(['/chausses'])
      }),error =>{
        console.log(error);
      }
    }
  }

}
