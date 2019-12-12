import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CameraUpload1Page } from './camera-upload1.page';

describe('CameraUpload1Page', () => {
  let component: CameraUpload1Page;
  let fixture: ComponentFixture<CameraUpload1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraUpload1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CameraUpload1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
