import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeatherHistoryPage } from './weather-history.page';

describe('WeatherHistoryPage', () => {
  let component: WeatherHistoryPage;
  let fixture: ComponentFixture<WeatherHistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherHistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
