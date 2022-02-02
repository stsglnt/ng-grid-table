import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {IData, IMinutesStepSelectOption, MinutesStep} from './interfaces';
import {generateDataSeriesForOneMonth, generateMinutesSeries, transformDataToEntities} from './utils';
import memo from 'memo-decorator';
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnDestroy {
  currentMinutesStep: MinutesStep = 5;
  private destroyed$ = new Subject();


  ngOnDestroy() {
    this.destroyed$.next(true);
  }




}
