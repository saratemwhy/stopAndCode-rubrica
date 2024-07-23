import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubricaNavbarComponent } from './rubrica-navbar.component';

describe('RubricaNavbarComponent', () => {
  let component: RubricaNavbarComponent;
  let fixture: ComponentFixture<RubricaNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RubricaNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RubricaNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
