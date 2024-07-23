import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubricaListComponent } from './rubrica-list.component';

describe('RubricaListComponent', () => {
  let component: RubricaListComponent;
  let fixture: ComponentFixture<RubricaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RubricaListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RubricaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
