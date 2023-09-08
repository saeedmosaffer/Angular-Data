import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL: string = "https://jsonplaceholder.typicode.com/"

  constructor(private http:HttpClient) { }

  getInformation():Observable<any>{
    return this.http.get(this.baseURL +"posts")
  }
}
