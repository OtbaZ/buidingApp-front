import { Component, OnInit } from '@angular/core';
import {MyServiceService} from '../my-service.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {OuvragesService} from '../ouvrages.service';
import {Ouvrage} from '../ouvrage';
import {SharedService} from "../shared/shared.service"
import {Router} from '@angular/router';
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-ouvrages',
  templateUrl: './ouvrages.component.html',
  styleUrls: ['./ouvrages.component.css']
})
export class OuvragesComponent implements OnInit {

  public ouvrages;

  constructor(private myService: MyServiceService, private ouvrageService : OuvragesService, private shared:SharedService,private router: Router) {

  }

  ngOnInit(): void {
    this.getOuvrages();
  }

  onRemove(number) {
    this.ouvrageService.deleteOuvrage(number).subscribe(data => {
      this.getOuvrages();
    }), error => {
      console.log(error);
    }
  }

  onUpdate(editOuvrage:Ouvrage){
    this.shared.setMessage(editOuvrage);
    this.router.navigate(['/ouvragesedit'])

  }

  private getOuvrages() {
    this.myService.getRessource("ouvrages").subscribe(data => {
      this.ouvrages = data;
    }, error => {
      console.log(error);
    })
  }

  onExportClick(){
    const options = {
      filename: 'Ouvrage.pdf',
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
