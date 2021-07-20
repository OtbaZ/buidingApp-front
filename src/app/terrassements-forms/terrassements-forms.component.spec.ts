import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrassementsFormsComponent } from './terrassements-forms.component';

describe('TerrassementsFormsComponent', () => {
  let component: TerrassementsFormsComponent;
  let fixture: ComponentFixture<TerrassementsFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerrassementsFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrassementsFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
