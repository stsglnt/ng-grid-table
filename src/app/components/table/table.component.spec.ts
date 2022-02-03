import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableComponent } from './table.component';
import { MockModule } from 'ng-mocks';
import { ScrollingModule } from '@angular/cdk/scrolling';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableComponent ],
      imports: [
        MockModule(ScrollingModule)
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return proper header', () => {
    jest.spyOn(component, 'getTableHeaders').mockReturnValue(['00:00', '00:05']);
    component.changeHeaders(5)
    expect(component.getTableHeaders).toBeCalledWith(5);
    expect(component.headers).toEqual(['Day', '00:00', '00:05']);
  });

});
