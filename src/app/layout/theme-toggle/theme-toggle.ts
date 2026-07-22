import { TitleCasePipe } from '@angular/common';
import { Component, computed, effect, inject, input, Renderer2, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { prefersDark, Theme, ThemeToggleService } from './services/theme-toggle-service';

const DARK_MODE_CLASS_NAME = 'dark-mode';

type ThemeIcon = 'dark_mode' | 'light_mode' | 'routine';
type TitleDisplay = 'start' | 'end' | 'none';

@Component({
  selector: 'app-theme-toggle',
  imports: [
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    MatSlideToggleModule,
    TitleCasePipe,
  ],
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.scss',
})
export class ThemeToggle {
  #renderer = inject(Renderer2);
  #themeService = inject(ThemeToggleService);

  titleDisplay = input<TitleDisplay>('none');

  isDarkMode: Signal<boolean> = this.#themeService.isDarkMode;
  prefersDark: boolean = prefersDark;
  theme = computed<string>(() => {
    const theme = this.#themeService.theme();

    if (theme !== 'system') return theme;

    return `System (${prefersDark ? 'Dark' : 'Light'})`
  });

  selectedModeIcon = computed<ThemeIcon>(() => {
    const theme = this.#themeService.theme();

    switch (theme) {
      case 'dark':
        return 'dark_mode';
      case 'light':
        return 'light_mode';
      case 'system':
      default:
        return 'routine';
    }
  });

  constructor() {
    effect(() => {
      if (this.isDarkMode()) {
        this.#renderer.addClass(document.body, DARK_MODE_CLASS_NAME);
      } else {
        this.#renderer.removeClass(document.body, DARK_MODE_CLASS_NAME);
      }
    });
  }

  setTheme(theme: Theme): void {
    this.#themeService.setTheme(theme);
  }
}
