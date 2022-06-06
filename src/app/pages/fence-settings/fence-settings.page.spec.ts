import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FenceSettingsPage } from './fence-settings.page';

describe('FenceSettingsPage', () => {
  let component: FenceSettingsPage;
  let fixture: ComponentFixture<FenceSettingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FenceSettingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FenceSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
