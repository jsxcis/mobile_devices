import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FlowmeterDetailPage } from './flowmeter-detail.page';

describe('FlowmeterDetailPage', () => {
  let component: FlowmeterDetailPage;
  let fixture: ComponentFixture<FlowmeterDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowmeterDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FlowmeterDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
