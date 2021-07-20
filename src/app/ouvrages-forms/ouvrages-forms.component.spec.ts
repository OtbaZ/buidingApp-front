import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuvragesFormsComponent } from './ouvrages-forms.component';

describe('OuvragesFormsComponent', () => {
  let component: OuvragesFormsComponent;
  let fixture: ComponentFixture<OuvragesFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OuvragesFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OuvragesFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
