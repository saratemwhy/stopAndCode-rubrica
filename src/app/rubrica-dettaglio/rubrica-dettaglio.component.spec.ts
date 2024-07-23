import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubricaDettaglioComponent } from './rubrica-dettaglio.component';

describe('RubricaDettaglioComponent', () => {
  let component: RubricaDettaglioComponent;
  let fixture: ComponentFixture<RubricaDettaglioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RubricaDettaglioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RubricaDettaglioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
