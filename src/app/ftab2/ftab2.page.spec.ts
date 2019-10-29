import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FTab2Page } from './ftab2.page';

describe('FTab2Page', () => {
  let component: FTab2Page;
  let fixture: ComponentFixture<FTab2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FTab2Page],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FTab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
