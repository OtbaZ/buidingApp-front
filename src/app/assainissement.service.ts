import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Assainissement} from './assainissement';

@Injectable({
  providedIn: 'root'
})
export class AssainissementService {

  public host:string="http://localhost:8080/assainissements"
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
