import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssainissementsFormsComponent } from './assainissements-forms.component';

describe('AssainissementsFormsComponent', () => {
  let component: AssainissementsFormsComponent;
  let fixture: ComponentFixture<AssainissementsFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssainissementsFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssainissementsFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
