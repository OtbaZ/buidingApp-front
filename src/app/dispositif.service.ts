import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Dispositif} from './dispositif';

@Injectable({
  providedIn: 'root'
})
export class DispositifService {

  public host:string="http://localhost:8080/dispositifs"
  constructor(private http:HttpClient) {

  }


  ngOnInit(): void {
  }

  public postDispositif(dispositif: Dispositif){
    return this.http.post<Dispositif>(this.host,dispositif);
  }

  public deleteDispositif(id: number){
    return this.http.delete(this.host+"/"+id);
  }

  public updateDispositif(dispositif:Dispositif, id:number){
    return this.http.put<Dispositif>(this.host+"/"+id,dispositif);
  }

}
