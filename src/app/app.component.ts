import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { Observable } from 'rxjs';
import { LoadingService } from './core/services';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LayoutModule, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-quick-starter-kit-v19';
  loading = true;
  loading$: Observable<boolean>;
  constructor(private loaderService: LoadingService) {
    this.loaderService.showLoading();
    this.loading$ = this.loaderService.loading$;

    // TODO: Add auth check/auth changes here and change loading state accordingly
    this.loaderService.hideLoading();
    this.loading = false;
  }
}
