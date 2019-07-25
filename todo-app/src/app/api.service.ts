import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_API_URL = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public get(path): Observable<any> {
    return this.httpClient.get<any>(`${BASE_API_URL}/${path}`); 
  }

  public delete(path) : Observable<any> {
    return this.httpClient.delete<any>(`${BASE_API_URL}/${path}`);
  }

  public put(path, body = {}) : Observable<any> {
    return this.httpClient.put<any>(`${BASE_API_URL}/${path}`, body);
  }

  public post(path, body?) : Observable<any> {
    return this.httpClient.post<any>(`${BASE_API_URL}/${path}`, body);
  }

}
