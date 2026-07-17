import { Component, computed, effect, inject, model, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

const THEME_PREFERENCE_LOCAL_STORAGE_KEY = 'themePreference';
const DARK_MODE_CLASS_NAME = 'dark-mode';
const PREFERS_COLOR_SCHEME_DARK = '(prefers-color-scheme: dark)';

const initialTheme: Theme =
  (localStorage.getItem(THEME_PREFERENCE_LOCAL_STORAGE_KEY) as Theme) ?? 'auto';
const prefersDark: boolean = window.matchMedia?.(PREFERS_COLOR_SCHEME_DARK).matches;

type Theme = 'auto' | 'dark' | 'light';

@Component({
  selector: 'app-theme-toggle',
  imports: [
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    MatSlideToggleModule,
  ],
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.scss',
})
export class ThemeToggle {
  #renderer = inject(Renderer2);

  theme = model<Theme>(initialTheme);
  isDarkMode = computed<boolean>(() => {
    const theme = this.theme();

    return theme === 'dark' || (theme === 'auto' && prefersDark);
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
    this.theme.set(theme);
    localStorage.setItem(THEME_PREFERENCE_LOCAL_STORAGE_KEY, theme);
  }
}
