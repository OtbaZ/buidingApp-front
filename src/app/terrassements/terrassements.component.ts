import { Component, OnInit } from '@angular/core';
import {MyServiceService} from '../my-service.service';
import {Terrassement} from '../terrassement';
import {TerrassementService} from '../terrassement.service';
import {SharedService} from '../shared/shared.service';
import {Router} from '@angular/router';
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-terrassements',
  templateUrl: './terrassements.component.html',
  styleUrls: ['./terrassements.component.css']
})
export class TerrassementsComponent implements OnInit {

  public terrassements;
  constructor(private myService : MyServiceService, private terrassementService: TerrassementService, private shared:SharedService,private router: Router) { }

  ngOnInit(): void {
    this.getTerrassements();
  }


  onRemove(number) {
    this.terrassementService.deleteTerrassement(number).subscribe(data => {
      this.getTerrassements();
    }), error => {
      console.log(error);
    }
  }

  onUpdate(editTerrassement:Terrassement){
    this.shared.setMessage(editTerrassement);
    this.router.navigate(['/terrassementsedit'])

  }

  private getTerrassements(){
    this.myService.getRessource("/terrassements").subscribe(data =>{
      this.terrassements=data;
    },error => {
      console.log(error);
    })
  }


  onExportClick(){
    const options = {
      filename: 'Térrassement.pdf',
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
