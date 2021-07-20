import { Component, OnInit } from '@angular/core';
import {MyServiceService} from '../my-service.service';
import {Chausse} from '../chausse';
import * as html2pdf from 'html2pdf.js';
import {SharedService} from '../shared/shared.service';
import {Router} from '@angular/router';
import {AssainissementService} from '../assainissement.service';
import {Assainissement} from '../assainissement';

@Component({
  selector: 'app-assainissements',
  templateUrl: './assainissements.component.html',
  styleUrls: ['./assainissements.component.css']
})
export class AssainissementsComponent implements OnInit {
  public assainissements;


  constructor(private myService: MyServiceService, private assainissementService : AssainissementService, private shared:SharedService,private router: Router) {
  }

  ngOnInit(): void {
    this.getAssainissements();
  }

  private getAssainissements(){
    this.myService.getRessource("/assainissements").subscribe(data =>{
      this.assainissements=data;
    }),error=>{
      console.log(error)
    }
  }

  onRemove(number) {
    this.assainissementService.deleteAssainissement(number).subscribe(data => {
      this.getAssainissements();
    }), error => {
      console.log(error);
    }
  }

  onUpdate(editAssainissement:Assainissement){
    this.shared.setMessage(editAssainissement);
    this.router.navigate(['/assainissementsedit'])

  }

  onExportClick(){
    const options = {
      filename: 'Assainissement.pdf',
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
