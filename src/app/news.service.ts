import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
const API_URL = environment.apiUrl;
const API_KEY = environment.apiKey;
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }
  getData(){ 
   // return this.http.get(`${API_URL}/${url}&apiKey=${API_KEY}`)
   return this.http.get('https://reqres.in/api/users')
  }
}
