import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TankDetailPage } from './tank-detail.page';

describe('TankDetailPage', () => {
  let component: TankDetailPage;
  let fixture: ComponentFixture<TankDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TankDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
