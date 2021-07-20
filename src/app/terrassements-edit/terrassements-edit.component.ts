import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared/shared.service';
import {Router} from '@angular/router';
import {Terrassement} from '../terrassement';
import {TerrassementService} from '../terrassement.service';

@Component({
  selector: 'app-terrassements-edit',
  templateUrl: './terrassements-edit.component.html',
  styleUrls: ['./terrassements-edit.component.css']
})
export class TerrassementsEditComponent implements OnInit {

  myTerrassement: Terrassement;
  selectedLevel;
  notCompleted:Boolean=false;

  data:Array<Object> = [
    {id: 0, name: "Oui"},
    {id: 1, name: "Non"}
  ];

  constructor(private shared:SharedService, private terrassementService : TerrassementService, private router: Router) { }

  ngOnInit(): void {
    this.myTerrassement=this.shared.getMessage();
    if(this.myTerrassement.treated){
      this.selectedLevel=this.data[0];
    }
    else{
      this.selectedLevel=this.data[1]
    }
  }

  getName(x){
    this.myTerrassement.name=x.value;
    console.log(this.myTerrassement);

  }

  getComment(x){
    this.myTerrassement.comment=x.value;
    console.log(this.myTerrassement);
  }

  getAuthor(x){
    this.myTerrassement.author=x.value;
    console.log(this.myTerrassement);
  }

  selected(){
    if(this.selectedLevel.name=="Oui"){
      this.myTerrassement.treated=true;
    }
    if(this.selectedLevel.name=="Non"){
      this.myTerrassement.treated=false;
    }
    console.log(this.selectedLevel.name)
  }


  onUpdate(){
    if(!this.selectedLevel || !this.myTerrassement.author || !this.myTerrassement.name ){
      this.notCompleted=true;
    }
    else{
      this.myTerrassement.date=new Date().toLocaleDateString();
      this.terrassementService.updateTerrassement(this.myTerrassement,this.myTerrassement.id).subscribe(data=>{
        this.router.navigate(['/terrasements'])
      }),error =>{
        console.log(error);
      }
    }
  }

}
