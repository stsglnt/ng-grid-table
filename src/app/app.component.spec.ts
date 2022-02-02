import { AppComponent } from './app.component';
import { Spectator } from "@ngneat/spectator";
import { createComponentFactory } from "@ngneat/spectator/jest";

  describe('AppComponent', () => {
    let spectator: Spectator<AppComponent>;
    const createComponent = createComponentFactory({
      shallow: true,
      component: AppComponent
    });

    it('should create', () => {
      spectator = createComponent();
      expect(spectator.component).toBeTruthy();
    });

    it('should sort the array', () => {
      spectator = createComponent({detectChanges: false});
      const dummyData = [
        {date: 1000},
        {date: 4},
        {date: 500},
      ] as any
      const expectedResult = [
        {date: 4},
        {date: 500},
        {date: 1000}
      ]
      expect(spectator.component.sortData(dummyData)).toEqual(expectedResult);
    })

  });
  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app).toBeTruthy();
  // });
  //
  // it(`should have as title 'grid-table'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('grid-table');
  // });
  //
  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('grid-table app is running!');
  // });
