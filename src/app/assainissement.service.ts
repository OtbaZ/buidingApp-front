import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Assainissement} from './assainissement';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AssainissementService {

  baseUrl=environment.baseUrl
  public host:string=this.baseUrl+"assainissements"
  constructor(private http:HttpClient) {

  }


  ngOnInit(): void {
  }

  public postAssainissement(assainissement: Assainissement){
    return this.http.post<Assainissement>(this.host,assainissement);
  }

  public deleteAssainissement(id: number){
    return this.http.delete(this.host+"/"+id);
  }

  public updateAssainissement(assainissement: Assainissement, id:number){
    return this.http.put<Assainissement>(this.host+"/"+id,assainissement);
  }

}
