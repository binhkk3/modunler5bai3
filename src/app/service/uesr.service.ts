import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Usr} from "../model/usr";
const API_URL = 'http://localhost:8080/api/cities';

@Injectable({
  providedIn: 'root'
})
export class UesrService {

  constructor(private httpClient: HttpClient) { }
  getAll():Observable<Usr[]>{
return this.httpClient.get<Usr[]>(API_URL);
  }

  getById(id:string): Observable<Usr>{
    return this.httpClient.get<Usr>(API_URL+`/${id}`);
 }
}
