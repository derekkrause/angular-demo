import { computed, Service, signal } from '@angular/core';

const THEME_PREFERENCE_LOCAL_STORAGE_KEY = 'themePreference';
const PREFERS_COLOR_SCHEME_DARK = '(prefers-color-scheme: dark)';

const initialTheme: Theme = (localStorage.getItem(THEME_PREFERENCE_LOCAL_STORAGE_KEY) as Theme) ?? 'system';
export const prefersDark: boolean = window.matchMedia?.(PREFERS_COLOR_SCHEME_DARK).matches;

export type Theme = 'system' | 'dark' | 'light';

@Service()
export class ThemeToggleService {
  readonly theme = signal<Theme>(initialTheme);

  readonly isDarkMode = computed<boolean>(() => {
    const theme = this.theme();

    return theme === 'dark' || (theme === 'system' && prefersDark);
  });

  readonly githubIcon = computed<string>(() => {
    return this.isDarkMode() ? 'github_white' : 'github_black';
  });

  setTheme(theme: Theme): void {
    this.theme.set(theme);
    localStorage.setItem(THEME_PREFERENCE_LOCAL_STORAGE_KEY, theme);
  }
}
