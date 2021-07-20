import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispositifsFormsComponent } from './dispositifs-forms.component';

describe('DispositifsFormsComponent', () => {
  let component: DispositifsFormsComponent;
  let fixture: ComponentFixture<DispositifsFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispositifsFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispositifsFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
