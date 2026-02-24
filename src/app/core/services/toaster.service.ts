import { Injectable } from '@angular/core';
import { Notyf } from 'notyf';

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  private notify: Notyf;
  constructor() {
    this.notify = new Notyf({
      duration: 3000,
      position: {
        x: 'right',
        y: 'top',
      },
      types: [
        {
          type: 'success',
          background: '#4caf50',
          icon: false,
        },
        {
          type: 'error',
          background: '#f44336',
          icon: false,
        },
      ],
    });
  }

  public alertSuccess(message: string): void {
    this.notify.success(message);
  }

  public alertError(message: string): void {
    this.notify.error(message);
  }
}
