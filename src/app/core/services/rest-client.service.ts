import { HttpClient, HttpParams, HttpResponse, HttpEvent, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestClientService {
  private apiUrl = `${environment.apiBaseUrl}`;

  constructor(private http: HttpClient) {}

  /**
   * Generic GET request
   * @param endpoint - API endpoint
   * @param params - Optional query parameters
   * @returns Observable of type T
   */
  get<T>(endpoint: string, params?: HttpParams): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}${endpoint}`, { params });
  }

  /**
   * Generic POST request
   * @param endpoint - API endpoint
   * @param body - Request body
   * @returns Observable of type T
   */
  post<T>(endpoint: string, body: any): Observable<T>;
  post<T>(
    endpoint: string,
    body: any,
    options: { observe: 'response'; responseType: any },
  ): Observable<HttpResponse<T>>;
  post<T>(
    endpoint: string,
    body: any,
    options?: any,
  ): Observable<T | HttpResponse<T> | HttpEvent<T>> {
    return this.http.post<T>(`${this.apiUrl}${endpoint}`, body, options);
  }

  /**
   * Generic PUT request
   * @param endpoint - API endpoint
   * @param body - Request body
   * @returns Observable of type T
   */
  put<T>(endpoint: string, body: any): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}${endpoint}`, body);
  }

  /**
   * Generic DELETE request
   * @param endpoint - API endpoint
   * @returns Observable of type T
   */
  delete<T>(endpoint: string): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}${endpoint}`);
  }

  /**
   * Add custom headers to requests
   * @returns HttpHeaders
   */
  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      // Add any other required headers here
    });
  }
}
