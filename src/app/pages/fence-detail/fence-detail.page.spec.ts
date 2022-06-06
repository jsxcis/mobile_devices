import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FenceDetailPage } from './fence-detail.page';

describe('FenceDetailPage', () => {
  let component: FenceDetailPage;
  let fixture: ComponentFixture<FenceDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FenceDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FenceDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
