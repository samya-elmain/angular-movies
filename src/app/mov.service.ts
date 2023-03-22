import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MovService {
  private moviesUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=6a99c14b767fa1380fe1cfd1ad04bbe8'; 
  private movieUrl = 'https://api.themoviedb.org/3/movie/5?api_key=6a99c14b767fa1380fe1cfd1ad04bbe8&language=fr';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }
  getAll() : Observable<any>{
    return this.http.get(this.moviesUrl);
  }
  getProduct(id: number): Observable<any> {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=6a99c14b767fa1380fe1cfd1ad04bbe8&language=fr`;
    return this.http.get(url);
  }
}
