import {Injectable, OnInit} from '@angular/core';
import {Ouvrage} from './ouvrage'
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OuvragesService implements  OnInit{


  baseUrl=environment.baseUrl

  public host:string=this.baseUrl+"ouvrages"
  constructor(private http:HttpClient) {

  }


  ngOnInit(): void {
  }

  public postOuvrage(ouvrage: Ouvrage){
    return this.http.post<Ouvrage>(this.host,ouvrage);
  }

  public deleteOuvrage(id: number){
    return this.http.delete(this.host+"/"+id);
  }

  public updateOuvrage(ouvrage:Ouvrage, id:number){
    return this.http.put<Ouvrage>(this.host+"/"+id,ouvrage);
  }
}
