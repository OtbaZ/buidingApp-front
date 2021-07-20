import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Chausse} from './chausse';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChausseService {

  baseUrl=environment.baseUrl

  public host:string=this.baseUrl+"chausses"
  constructor(private http:HttpClient) {

  }


  ngOnInit(): void {
  }

  public postChausse(chausse: Chausse){
    return this.http.post<Chausse>(this.host,chausse);
  }

  public deleteChausse(id: number){
    return this.http.delete(this.host+"/"+id);
  }

  public updateChausse(chausse:Chausse, id:number){
    return this.http.put<Chausse>(this.host+"/"+id,chausse);
  }

}
