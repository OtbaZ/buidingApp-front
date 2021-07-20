import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {


  baseUrl=environment.baseUrl

  public host:string=this.baseUrl

  constructor(private http: HttpClient) {
  }

  public getRessource(url){
    return this.http.get(this.host+url);
  }

}
