import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TroughDetailPage } from './trough-detail.page';

describe('TroughDetailPage', () => {
  let component: TroughDetailPage;
  let fixture: ComponentFixture<TroughDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TroughDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TroughDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
