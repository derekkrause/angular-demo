import { Component, computed, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { ActiveRouteService } from '@app/shared/services/active-route.service';
import { ThemeToggle } from '../../core/theme/components/theme-toggle/theme-toggle';
import { PageTitle } from '../page-title/page-title';

/* 
  NavOption contains a path separate from title since a title can have whitespaces,
  whereas a path would be kebab-cased.
**/
const NAV_OPTIONS = [
  {
    icon: 'dashboard',
    path: 'dashboard',
    title: 'Dashboard',
  },
  {
    icon: 'eda',
    path: 'recalls',
    title: 'Recalls',
  },
  {
    icon: 'star',
    path: 'watchlist',
    title: 'Watchlist',
  },
  {
    icon: 'apartment',
    path: 'companies',
    title: 'Companies',
  },
  {
    icon: 'breaking_news',
    path: 'reports',
    title: 'Reports',
  },
  {
    icon: 'settings',
    path: 'settings',
    title: 'Settings',
  },
] as const;

type NavOption = (typeof NAV_OPTIONS)[number];
type NavPath = NavOption['path'];

@Component({
  selector: 'app-nav-panel',
  imports: [MatButtonModule, MatIconModule, MatListModule, PageTitle, RouterLink, ThemeToggle],
  templateUrl: './nav-panel.html',
  styleUrl: './nav-panel.scss',
})
export class NavPanel {
  readonly #activeRouteService = inject(ActiveRouteService);

  readonly #url = this.#activeRouteService.url;

  protected readonly activeLink = computed<NavPath | undefined>(() => {
    const firstSegment = this.#url().split('?')[0].split('#')[0].split('/')[1];

    return this.#isNavPath(firstSegment) ? firstSegment : undefined;
  });

  protected readonly navOptions: readonly NavOption[] = NAV_OPTIONS;

  #isNavPath(path: string | undefined): path is NavPath {
    return NAV_OPTIONS.some((option) => option.path === path);
  }
}
