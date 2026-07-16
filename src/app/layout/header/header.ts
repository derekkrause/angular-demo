import { Component, model } from '@angular/core';
import { ThemeToggle } from './theme-toggle/theme-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, ThemeToggle],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

}
