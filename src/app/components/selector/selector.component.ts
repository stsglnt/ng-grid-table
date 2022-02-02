import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {IMinutesStepSelectOption, MinutesStep} from "../../interfaces";

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectorComponent implements OnInit {
  public stepControl = new FormControl();
  public selectorOptions: IMinutesStepSelectOption[];

  @Output() selectionChange = new EventEmitter<MinutesStep>();

  ngOnInit(): void {
    this.selectorOptions = this.getSelectorOptions();
    this.stepControl.setValue(5);
  }

  getSelectorOptions(): IMinutesStepSelectOption[] {
    return [
      {value: 5, label: '5 minutes'},
      {value: 30, label: '30 minutes'},
      {value: 60, label: '1 hour'},
    ]
  }

  onFieldChange(event: any) {
    console.log('event', event)
  }
}
