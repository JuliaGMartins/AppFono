import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PTab2Page } from './ptab2.page';

describe('PTab2Page', () => {
  let component: PTab2Page;
  let fixture: ComponentFixture<PTab2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PTab2Page],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PTab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
