import { Injectable } from '@angular/core';
import {Ouvrage} from '../ouvrage';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  message:Ouvrage;

  constructor() { }

  setMessage(data){
    this.message=data;
  }
  getMessage(){
    return this.message;
  }
}
