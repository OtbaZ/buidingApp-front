import { Component, OnInit } from '@angular/core';
import {MyServiceService} from '../my-service.service';
import * as html2pdf from 'html2pdf.js';
import {SharedService} from '../shared/shared.service';
import {Router} from '@angular/router';
import {EquipementService} from '../equipement.service';
import {Equipement} from '../equipement';

@Component({
  selector: 'app-equipements',
  templateUrl: './equipements.component.html',
  styleUrls: ['./equipements.component.css']
})
export class EquipementsComponent implements OnInit {

  public equipements;
  constructor(private myService: MyServiceService, private equipementService : EquipementService, private shared:SharedService,private router: Router) { }

  ngOnInit(): void {
    this.getDispositifs();
  }

  private getDispositifs(){
    this.myService.getRessource("equipements").subscribe(data =>{
      this.equipements=data;
    },error => {
      console.log(error);
    })
  }

  onRemove(number) {
    this.equipementService.deleteEquipement(number).subscribe(data => {
      this.getEquipement();
    }), error => {
      console.log(error);
    }
  }

  onUpdate(editEquipement:Equipement){
    this.shared.setMessage(editEquipement);
    this.router.navigate(['/equipementssedit'])

  }

  private getEquipement() {
    this.myService.getRessource("equipements").subscribe(data => {
      this.equipements = data;
    }, error => {
      console.log(error);
    })
  }

  onExportClick(){
    const options = {
      filename: 'Equipement.pdf',
      image:{type:'jpeg'},
      html2canvas : {},
      jsPDF: {orientation:'landscape'}
    };

    const content: Element = document.getElementById('print');

    html2pdf()
      .from(content)
      .set(options)
      .save();
  }
}


