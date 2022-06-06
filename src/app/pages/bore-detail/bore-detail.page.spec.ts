import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BoreDetailPage } from './bore-detail.page';

describe('BoreDetailPage', () => {
  let component: BoreDetailPage;
  let fixture: ComponentFixture<BoreDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoreDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BoreDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
