import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  token: string = ""
  id: any
  companyname: any
  constructor(
    private http: HttpClient,
  ) {  }

  login(data: any):Observable<any>{
    return this.http.post('http://hmaapi.kilobytetech.com/auth/login',data);
  }
  
  clients():Observable<any>{
    var header = new HttpHeaders({
      'Authorization': this.token,
      'Content-Type': 'application/json'
    }); 
    return this.http.get('http://hmaapi.kilobytetech.com/users?pageNo=1&size=20',{
      headers: header
    })
  }

  companyDetail():Observable<any>{
    var header = new HttpHeaders({
      'Authorization': this.token,
      'Content-Type': 'application/json'
    }); 
    const httpParams = new HttpParams({
      fromObject: {
        clientId: this.id,
        financialYear: "2020-2021"
      }
    })
    const options = {
      params: httpParams,
      headers:header
    }
    return this.http.get('http://hmaapi.kilobytetech.com/documents',options);
  }
}
