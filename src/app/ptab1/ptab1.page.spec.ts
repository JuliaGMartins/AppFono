import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PTab1Page } from './ptab1.page';

describe('PTab1Page', () => {
  let component: PTab1Page;
  let fixture: ComponentFixture<PTab1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PTab1Page],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PTab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
