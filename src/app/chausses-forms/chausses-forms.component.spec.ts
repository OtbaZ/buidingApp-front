import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaussesFormsComponent } from './chausses-forms.component';

describe('ChaussesFormsComponent', () => {
  let component: ChaussesFormsComponent;
  let fixture: ComponentFixture<ChaussesFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaussesFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaussesFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
