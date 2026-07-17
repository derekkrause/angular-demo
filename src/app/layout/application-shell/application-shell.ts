import { Component } from '@angular/core';
import { Navigation } from '../navigation/navigation';

@Component({
  selector: 'app-application-shell',
  imports: [Navigation],
  templateUrl: './application-shell.html',
  styleUrl: './application-shell.scss',
})
export class ApplicationShell {}
