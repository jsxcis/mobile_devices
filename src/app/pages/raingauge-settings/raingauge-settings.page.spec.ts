import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RaingaugeSettingsPage } from './raingauge-settings.page';

describe('RaingaugeSettingsPage', () => {
  let component: RaingaugeSettingsPage;
  let fixture: ComponentFixture<RaingaugeSettingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaingaugeSettingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RaingaugeSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
