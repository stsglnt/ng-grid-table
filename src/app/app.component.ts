import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MinutesStep } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent   {
  currentMinutesStep: MinutesStep = 5;
}
