import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Work } from './work';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  private url = "http://localhost:1600/api/v1/works"

  constructor(private http: HttpClient) { }

  getImages(): Observable<Work[]>{
    return this.http.get<Work[]>(this.url).pipe(
      catchError(this.handleError<Work[]>('getImages', []))
    )
  }

  addWork(work: Work) : Observable<Work> {
    return this.http.post<Work>(this.url, work);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}
