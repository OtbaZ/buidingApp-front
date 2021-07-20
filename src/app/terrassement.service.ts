import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Terrassement} from './terrassement';

@Injectable({
  providedIn: 'root'
})
export class TerrassementService {

  public host:string="http://localhost:8080/terrassements"
  constructor(private http:HttpClient) {

  }


  ngOnInit(): void {
  }

  public postTerrassement(terrassement: Terrassement){
    return this.http.post<Terrassement>(this.host,terrassement);
  }

  public deleteTerrassement(id: number){
    return this.http.delete(this.host+"/"+id);
  }

  public updateTerrassement(terrassement:Terrassement, id:number){
    return this.http.put<Terrassement>(this.host+"/"+id,terrassement);
  }

}


