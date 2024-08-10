import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../model/post.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  list(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  get(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  create(data: Post): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  update(id: string, data: Post): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  publishUnpublish(id: string, data: Post): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}/publish`, data);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  findByTitle(title: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?title=${title}`);
  }
}
