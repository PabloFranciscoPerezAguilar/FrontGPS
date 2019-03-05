import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { API } from 'src/app/app-config'

const httpOptions = {
  headers : new HttpHeaders({
    'Content_Type': 'applications/json',
    'Autorization' : 'Token'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api : string = API

  constructor( private http: HttpClient ) { }

  login(params: any):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post(`${this.api}login/`, params, httpOptions)
  }

  getProfiles():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.get(`${this.api}profile/`, httpOptions)
  }
}
