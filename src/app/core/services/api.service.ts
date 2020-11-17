import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL: string = 'https://movie0706.cybersoft.edu.vn/api';

  handleError(error: HttpErrorResponse) {

    switch (error.status) {
      case 500:
        // show toast báo lỗi server
        console.log("Lỗi server");
        break;
      case 401:
        // xử lý logout,..
        console.log("Lỗi authorization");
        break;
      default:
        break;
    }
    return throwError(error);
  }
  constructor(private http: HttpClient) { }

  // Trong pipe() sẽ nhận được result hoặc error
  get<T>(url: string, options = {}): Observable<T> {
    return this.http.get<T>(`${this.BASE_URL}/${url}`, options).pipe(
      catchError(this.handleError)
    );
  }

  post<T>(url: string, data: any, options = {}): Observable<T> {
    return this.http.post<T>(`${this.BASE_URL}/${url}`, data, options).pipe(
      catchError(this.handleError)
    );
  }

  put<T>(url: string, data: any, options = {}): Observable<T> {
    return this.http.put<T>(`${this.BASE_URL}/${url}`, data, options).pipe(
      catchError(this.handleError)
    );
  }

  delete<T>(url: string, options = {}): Observable<T> {
    return this.http.delete<T>(`${this.BASE_URL}/${url}`, options).pipe(
      catchError(this.handleError)
    );
  }

}
