import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared/shared.service';
import {Router} from '@angular/router';
import {Equipement} from '../equipement';
import {EquipementService} from '../equipement.service';

@Component({
  selector: 'app-equipements-edit',
  templateUrl: './equipements-edit.component.html',
  styleUrls: ['./equipements-edit.component.css']
})
export class EquipementsEditComponent implements OnInit {

  myEquipement: Equipement;
  selectedLevel;
  notCompleted:Boolean=false;

  data:Array<Object> = [
    {id: 0, name: "Oui"},
    {id: 1, name: "Non"}
  ];

  constructor(private shared:SharedService, private equipementService : EquipementService, private router: Router) { }

  ngOnInit(): void {
    this.myEquipement=this.shared.getMessage();
    if(this.myEquipement.treated){
      this.selectedLevel=this.data[0];
    }
    else{
      this.selectedLevel=this.data[1]
    }
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


  onUpdate(){
    if(!this.selectedLevel || !this.myEquipement.author || !this.myEquipement.name ){
      this.notCompleted=true;
    }
    else{
      this.myEquipement.date=new Date().toLocaleDateString();
      this.equipementService.updateEquipement(this.myEquipement,this.myEquipement.id).subscribe(data=>{
        this.router.navigate(['/equipements'])
      }),error =>{
        console.log(error);
      }
    }
  }

}
