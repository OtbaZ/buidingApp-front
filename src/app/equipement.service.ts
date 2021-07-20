import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Equipement} from './equipement';

@Injectable({
  providedIn: 'root'
})
export class EquipementService {

  public host:string="http://localhost:8080/equipements"
  constructor(private http:HttpClient) {

  }


  ngOnInit(): void {
  }

  public postEquipement(equipement: Equipement){
    return this.http.post<Equipement>(this.host,equipement);
  }

  public deleteEquipement(id: number){
    return this.http.delete(this.host+"/"+id);
  }

  public updateEquipement(equipement:Equipement, id:number){
    return this.http.put<Equipement>(this.host+"/"+id,equipement);
  }

}
