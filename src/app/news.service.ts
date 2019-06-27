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
  getData(url){
    debugger
   // return this.http.get(`${API_URL}/${url}?apiKey=${API_KEY}`)
   return this.http.get('https://newsapi.org/v2/everything?q=bitcoin&from=2019-05-27&sortBy=publishedAt&apiKey=117bbb2552d4499b9a9432494c60946b')
  }
}
