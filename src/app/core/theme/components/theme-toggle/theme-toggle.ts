import { TitleCasePipe } from '@angular/common';
import { Component, computed, inject, input, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { prefersDark, Theme, ThemeService } from '../../services/theme.service';

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
  #themeService = inject(ThemeService);

  titleDisplay = input<TitleDisplay>('none');

  isDarkMode: Signal<boolean> = this.#themeService.isDarkMode;
  prefersDark: boolean = prefersDark;
  theme = computed<string>(() => {
    const theme = this.#themeService.theme();

    if (theme !== 'system') return theme;

    return `System (${prefersDark ? 'Dark' : 'Light'})`;
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

  setTheme(theme: Theme): void {
    this.#themeService.setTheme(theme);
  }
}
