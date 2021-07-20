import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Terrassement} from '../terrassement';
import {TerrassementService} from '../terrassement.service';

@Component({
  selector: 'app-terrassements-forms',
  templateUrl: './terrassements-forms.component.html',
  styleUrls: ['./terrassements-forms.component.css']
})
export class TerrassementsFormsComponent implements OnInit {

  myTerrassement: Terrassement;
  selectedLevel;
  notCompleted:Boolean=false;

  data:Array<Object> = [
    {id: 0, name: "Oui"},
    {id: 1, name: "Non"}
  ];


  constructor(private  terrassementService : TerrassementService, private router: Router) {
    this.myTerrassement=new Terrassement();
  }

  ngOnInit(): void {
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


  onSave(){
    if(!this.selectedLevel || !this.myTerrassement.author || !this.myTerrassement.name ){
      this.notCompleted=true;
    }
    else{
      this.myTerrassement.date=new Date().toLocaleDateString();
      this.terrassementService.postTerrassement(this.myTerrassement).subscribe(data=>{
        this.router.navigate(['/terrasements'])
      }),error =>{
        console.log(error);
      }
    }
  }
}
