import { Component } from '@angular/core';
import { ThemeToggle } from '../theme-toggle/theme-toggle';
import { PageTitle } from '../page-title/page-title';

@Component({
  selector: 'app-navigation',
  imports: [PageTitle, ThemeToggle],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class Navigation {}
