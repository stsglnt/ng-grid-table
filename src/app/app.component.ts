import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IData } from './interfaces';
import { generateDataSeriesForOneMonth } from './utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public data: IData[];
  public dataWithKeys: Record<any, any>;
  public intervalControl = new FormControl();
  public headerOptions = [
    {value: '5', label: '5 minutes'},
    {value: '30', label: '30 minutes'},
    {value: '60', label: '1 hour'},
  ]
  public 5 = ['00:00', '00:05', '00:10', '00:15', '00:20', '00:30', '01:00', '01:30', '02:00'];
  public headers = ['00:00', '00:05', '00:10', '00:15', '00:20', '00:25', '00:30', '00:35'];
  public testdumydata = [
    {'00:00': {value: 1}, '00:05': {value: 2}, '00:10': {value: 3}, '00:15': {value: 4}, '00:20': {value: 5}, '00:25': {value: 6}, '00:30': {value: 6}, '00:35': {value: 6}, '01:00': {value: 7}, '01:30': {value: 8}, '02:00': {value: 9}},
    {'00:00': {value: 1}, '00:05': {value: 2}, '00:10': {value: 3}, '00:15': {value: 4}, '00:20': {value: 5}, '00:25': {value: 6}, '00:30': {value: 6}, '00:35': {value: 6}, '01:00': {value: 7}, '01:30': {value: 8}, '02:00': {value: 9}},
    {'00:00': {value: 1}, '00:05': {value: 2}, '00:10': {value: 3}, '00:15': {value: 4}, '00:20': {value: 5}, '00:25': {value: 6}, '00:30': {value: 6}, '00:35': {value: 6}, '01:00': {value: 7}, '01:30': {value: 8}, '02:00': {value: 9}},
    {'00:00': {value: 1}, '00:05': {value: 2}, '00:10': {value: 3}, '00:15': {value: 4}, '00:20': {value: 5}, '00:25': {value: 6}, '00:30': {value: 6}, '00:35': {value: 6}, '01:00': {value: 7}, '01:30': {value: 8}, '02:00': {value: 9}}
  ] as any;

  ngOnInit() {
    this.data = generateDataSeriesForOneMonth(5);
    this.dataWithKeys = this.transformDataToEntities(this.data);
    console.log('entities', this.dataWithKeys);
    this.intervalControl.setValue('5');
    this.watchIntervalControlChanges();
  }

  watchIntervalControlChanges() {
    this.intervalControl.valueChanges.subscribe(res => {
      switch (res) {
        case '5': {
          this.headers = ['00:00', '00:05', '00:10', '00:15', '00:20', '00:25', '00:30', '00:35'];
          break;
        }
        case '30': {
          this.headers = ['00:00', '00:30', '01:00', '01:30', '02:00'];
          break;
        }
        case '60': {
          this.headers = ['00:00', '01:00', '02:00', '03:00', '04:00'];
          break;
        }
      }
    })
  }

  sortData(data: IData[]) {
    return data.sort((a, b) => {
      return a.date - b.date;
    })
  }

  transformDataToEntities(data: IData[]): any {
    return data.reduce((entities: { [id: string]: any }, v: any) => {
      // we need to store only date so remove hours from timestamp
      const currentIteratingDay = new Date(v.date).setHours(0, 0, 0, 0);
      return {
        ...entities,
        [currentIteratingDay]: this.setEntityInterval(entities[currentIteratingDay], v)
      };
    }, {});
  }

  setEntityInterval(entity: any,  data: any): any {
    // should correspond to the headers
    const intervalKey = new Date(data.date).toLocaleString('en-GB', {hour: '2-digit', minute:'2-digit'});
    if (entity) {
      entity = {
        ...entity,
        [intervalKey]: data
      }
      return entity
    }
    return {}
  }
}
