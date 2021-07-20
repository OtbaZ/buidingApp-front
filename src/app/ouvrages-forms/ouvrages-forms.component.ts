import { Component, OnInit } from '@angular/core';
import {Ouvrage} from '../ouvrage';
import {OuvragesService} from '../ouvrages.service';
import {error} from 'selenium-webdriver';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ouvrages-forms',
  templateUrl: './ouvrages-forms.component.html',
  styleUrls: ['./ouvrages-forms.component.css']
})
export class OuvragesFormsComponent implements OnInit {


  myOuvrage: Ouvrage;
  selectedLevel;
  notCompleted:Boolean=false;

  data:Array<Object> = [
    {id: 0, name: "Oui"},
    {id: 1, name: "Non"}
  ];


  constructor(private ouvrageService : OuvragesService, private router: Router) {
    this.myOuvrage=new Ouvrage();
  }

  ngOnInit(): void {
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


  onSave(){
    if(!this.selectedLevel || !this.myOuvrage.author || !this.myOuvrage.name ){
      this.notCompleted=true;
    }
    else{
      this.myOuvrage.date=new Date().toLocaleDateString();
      this.ouvrageService.postOuvrage(this.myOuvrage).subscribe(data=>{
        this.router.navigate(['/ouvrages'])
      }),error =>{
        console.log(error);
      }
    }
  }
}
