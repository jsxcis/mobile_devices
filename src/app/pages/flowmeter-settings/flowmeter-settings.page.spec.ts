import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FlowmeterSettingsPage } from './flowmeter-settings.page';

describe('FlowmeterSettingsPage', () => {
  let component: FlowmeterSettingsPage;
  let fixture: ComponentFixture<FlowmeterSettingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowmeterSettingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FlowmeterSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
