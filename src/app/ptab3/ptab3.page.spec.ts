import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PTab3Page } from './ptab3.page';

describe('PTab3Page', () => {
  let component: PTab3Page;
  let fixture: ComponentFixture<PTab3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PTab3Page],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PTab3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
