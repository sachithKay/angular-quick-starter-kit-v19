import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(): void {
    // TODO: Implement login functionality
  }

  logout() {
    // TODO: Implement logout functionality
    return of(null);
  }

  getCurrentUser(): any {
    // TODO: Implement getCurrentUser functionality
    return null;
  }

  getIdToken$(): Observable<string | null> {
    // TODO: Implement getIdToken$ functionality
    return of(null);
  }
}
