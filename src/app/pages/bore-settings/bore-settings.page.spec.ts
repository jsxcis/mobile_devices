import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BoreSettingsPage } from './bore-settings.page';

describe('BoreSettingsPage', () => {
  let component: BoreSettingsPage;
  let fixture: ComponentFixture<BoreSettingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoreSettingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BoreSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
