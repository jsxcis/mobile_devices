import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GateDetailPage } from './gate-detail.page';

describe('GateDetailPage', () => {
  let component: GateDetailPage;
  let fixture: ComponentFixture<GateDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GateDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GateDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
