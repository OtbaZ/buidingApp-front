import { Component, OnInit } from '@angular/core';
import {MyServiceService} from '../my-service.service';
import * as html2pdf from 'html2pdf.js';
import {Ouvrage} from '../ouvrage';
import {SharedService} from '../shared/shared.service';
import {Router} from '@angular/router';
import {DispositifService} from '../dispositif.service';
import {Dispositif} from '../dispositif';

@Component({
  selector: 'app-dispositif',
  templateUrl: './dispositif.component.html',
  styleUrls: ['./dispositif.component.css']
})
export class DispositifComponent implements OnInit {
  public dispositifs;
  constructor(private myService : MyServiceService, private dispositifService : DispositifService, private shared:SharedService,private router: Router) { }

  ngOnInit(): void {
    this.getDispositifs();
  }

  private getDispositifs(){
    this.myService.getRessource("dispositifs").subscribe(data =>{
      this.dispositifs=data;
    },error => {
      console.log(error);
    })
  }

  onRemove(number) {
    this.dispositifService.deleteDispositif(number).subscribe(data => {
      this.getDispositifs();
    }), error => {
      console.log(error);
    }
  }

  onUpdate(editDispositif:Dispositif){
    this.shared.setMessage(editDispositif);
    this.router.navigate(['/dispositifsedit'])

  }

  onExportClick(){
    const options = {
      filename: 'Dispositif.pdf',
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
