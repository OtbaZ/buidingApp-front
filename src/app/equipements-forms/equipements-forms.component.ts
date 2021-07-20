import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Equipement} from '../equipement';
import {EquipementService} from '../equipement.service';

@Component({
  selector: 'app-equipements-forms',
  templateUrl: './equipements-forms.component.html',
  styleUrls: ['./equipements-forms.component.css']
})
export class EquipementsFormsComponent implements OnInit {

  myEquipement: Equipement;
  selectedLevel;
  notCompleted:Boolean=false;

  data:Array<Object> = [
    {id: 0, name: "Oui"},
    {id: 1, name: "Non"}
  ];


  constructor(private equipementService : EquipementService, private router: Router) {
    this.myEquipement=new Equipement();
  }

  ngOnInit(): void {
  }

  getName(x){
    this.myEquipement.name=x.value;
    console.log(this.myEquipement);

  }

  getComment(x){
    this.myEquipement.comment=x.value;
    console.log(this.myEquipement);
  }

  getAuthor(x){
    this.myEquipement.author=x.value;
    console.log(this.myEquipement);
  }

  selected(){
    if(this.selectedLevel.name=="Oui"){
      this.myEquipement.treated=true;
    }
    if(this.selectedLevel.name=="Non"){
      this.myEquipement.treated=false;
    }
    console.log(this.selectedLevel.name)
  }


  onSave(){
    if(!this.selectedLevel || !this.myEquipement.author || !this.myEquipement.name ){
      this.notCompleted=true;
    }
    else{
      this.myEquipement.date=new Date().toLocaleDateString();
      this.equipementService.postEquipement(this.myEquipement).subscribe(data=>{
        this.router.navigate(['/equipements'])
      }),error =>{
        console.log(error);
      }
    }
  }



}
