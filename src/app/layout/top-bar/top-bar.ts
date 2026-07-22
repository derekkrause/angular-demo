import { Component, inject, Signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActiveRouteService } from '@app/shared/services/active-route.service';
import { ThemeService } from '../../core/theme/services/theme.service';

@Component({
  selector: 'app-top-bar',
  imports: [MatButtonModule, MatIconModule, MatToolbarModule],
  templateUrl: './top-bar.html',
  styleUrl: './top-bar.scss',
})
export class TopBar {
  readonly #activeRouteService = inject(ActiveRouteService);
  readonly #themeService = inject(ThemeService);

  icon: Signal<string> = this.#themeService.githubIcon;

  protected readonly title: Signal<string> = this.#activeRouteService.title;
}
