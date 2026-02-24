import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { AuthService } from '../../core/services';
import { from } from 'rxjs';

@Component({
  //standalone: false,
  selector: 'app-layout-parent',
  imports: [CommonModule, SharedModule, RouterModule],
  templateUrl: './layout-parent.component.html',
  styleUrl: './layout-parent.component.scss',
})
export class LayoutParentComponent {
  isSidenavOpen = true;
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  logout(): void {
    from(this.authService.logout()).subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
    });
  }

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  onUserSettings() {
    this.router.navigate(['/users']);
  }
}
