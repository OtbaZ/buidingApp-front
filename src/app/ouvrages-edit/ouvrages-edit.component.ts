import { Component, OnInit } from '@angular/core';
import {SharedService} from "../shared/shared.service"
import {Ouvrage} from '../ouvrage';
import {OuvragesService} from '../ouvrages.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-ouvrages-edit',
  templateUrl: './ouvrages-edit.component.html',
  styleUrls: ['./ouvrages-edit.component.css']
})
export class OuvragesEditComponent implements OnInit {

  myOuvrage: Ouvrage;
  selectedLevel;
  notCompleted:Boolean=false;

  data:Array<Object> = [
    {id: 0, name: "Oui"},
    {id: 1, name: "Non"}
  ];

  constructor(private shared:SharedService, private ouvrageService : OuvragesService, private router: Router) { }

  ngOnInit(): void {
    this.myOuvrage=this.shared.getMessage();
    if(this.myOuvrage.treated){
      this.selectedLevel=this.data[0];
    }
    else{
      this.selectedLevel=this.data[1]
    }
  }

  getName(x){
    this.myOuvrage.name=x.value;
    console.log(this.myOuvrage);

  }

  getComment(x){
    this.myOuvrage.comment=x.value;
    console.log(this.myOuvrage);
  }

  getAuthor(x){
    this.myOuvrage.author=x.value;
    console.log(this.myOuvrage);
  }

  selected(){
    if(this.selectedLevel.name=="Oui"){
      this.myOuvrage.treated=true;
    }
    if(this.selectedLevel.name=="Non"){
      this.myOuvrage.treated=false;
    }
    console.log(this.selectedLevel.name)
  }


  onUpdate(){
    if(!this.selectedLevel || !this.myOuvrage.author || !this.myOuvrage.name ){
      this.notCompleted=true;
    }
    else{
      this.myOuvrage.date=new Date().toLocaleDateString();
      this.ouvrageService.updateOuvrage(this.myOuvrage,this.myOuvrage.id).subscribe(data=>{
        this.router.navigate(['/ouvrages'])
      }),error =>{
        console.log(error);
      }
    }
  }

}
