import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FTab3Page } from './ftab3.page';

describe('Tab3Page', () => {
  let component: FTab3Page;
  let fixture: ComponentFixture<FTab3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FTab3Page],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FTab3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
