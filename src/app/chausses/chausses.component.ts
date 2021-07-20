import { Component, OnInit } from '@angular/core';
import {MyServiceService} from '../my-service.service';
import * as html2pdf from 'html2pdf.js';
import {SharedService} from '../shared/shared.service';
import {Router} from '@angular/router';
import {ChausseService} from '../chausse.service';
import {Chausse} from '../chausse';

@Component({
  selector: 'app-chausses',
  templateUrl: './chausses.component.html',
  styleUrls: ['./chausses.component.css']
})
export class ChaussesComponent implements OnInit {
  public chausses;

  constructor(private myService : MyServiceService, private chausseService : ChausseService, private shared:SharedService,private router: Router) { }

  ngOnInit(): void {
    this.getChausses();
  }

  private getChausses(){
    this.myService.getRessource("chausses").subscribe(data =>{
      this.chausses=data;
    }),error=>{
      console.log(error)
    }
  }

  onRemove(number) {
    this.chausseService.deleteChausse(number).subscribe(data => {
      this.getChausses();
    }), error => {
      console.log(error);
    }
  }

  onUpdate(editChausse:Chausse){
    this.shared.setMessage(editChausse);
    this.router.navigate(['/chausseedit'])

  }

  onExportClick(){
    const options = {
      filename: 'Chaussé.pdf',
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
