import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FlowmeterHistoryPage } from './flowmeter-history.page';

describe('FlowmeterHistoryPage', () => {
  let component: FlowmeterHistoryPage;
  let fixture: ComponentFixture<FlowmeterHistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowmeterHistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FlowmeterHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
