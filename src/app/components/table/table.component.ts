import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import memo from 'memo-decorator';
import { IData, MinutesStep } from '../../interfaces';
import { generateDataSeriesForOneMonth, generateMinutesSeries, transformDataToEntities } from '../../utils';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {
  public dataWithKeys: ReadonlyMap<any, any>;
  // used for table headers (has 'Day' in it)
  public headers: string[];
  // for iterating over data and showing corresponded one
  public minutesSteps: string[];

  private data: IData[];

  @Input() set currentMinutesStep(value: MinutesStep) {
    this.changeHeaders(value);
  };

  ngOnInit(): void {
    this.data = generateDataSeriesForOneMonth(5);
    // if data comes in a raw not sorted way ([{value: string, date: number}])
    // we need to sort it, so it can be displayed corresponded to headers and days
    this.dataWithKeys = transformDataToEntities(this.data);
    // set default header with 5 minutes step
  }

  changeHeaders(minutesStep: MinutesStep) {
    switch (minutesStep) {
      case 5: {
        this.minutesSteps = this.getTableHeaders(5);
        this.headers = ['Day', ...this.minutesSteps]
        break;
      }
      case 30: {
        this.minutesSteps = this.getTableHeaders(30);
        this.headers = ['Day', ...this.minutesSteps]
        break;
      }
      case 60: {
        this.minutesSteps = this.getTableHeaders(60);
        this.headers = ['Day', ...this.minutesSteps]
        break;
      }
      }
  }

  // use memo so series is only calculated once
  @memo()
  getTableHeaders(step: MinutesStep) {
    return generateMinutesSeries(step);
  }

  trackByFn(index: number, item: any) {
    return item.key
  }
}
