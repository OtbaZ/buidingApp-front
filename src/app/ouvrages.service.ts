import {Injectable, OnInit} from '@angular/core';
import {Ouvrage} from './ouvrage'
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OuvragesService implements  OnInit{

  public host:string="http://localhost:8080/ouvrages"
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
