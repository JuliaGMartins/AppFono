import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FTab1Page } from './ftab1.page';

describe('FTab1Page', () => {
  let component: FTab1Page;
  let fixture: ComponentFixture<FTab1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FTab1Page],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FTab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
