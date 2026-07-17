import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ApplicationShell } from './layout/application-shell/application-shell';

@Component({
  selector: 'app-root',
  imports: [ApplicationShell],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './app.scss',
})
export class App {}
