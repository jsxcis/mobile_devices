import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RaingaugeDetailPage } from './raingauge-detail.page';

describe('RaingaugeDetailPage', () => {
  let component: RaingaugeDetailPage;
  let fixture: ComponentFixture<RaingaugeDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaingaugeDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RaingaugeDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
