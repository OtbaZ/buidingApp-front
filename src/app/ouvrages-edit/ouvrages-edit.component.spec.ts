import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuvragesEditComponent } from './ouvrages-edit.component';

describe('OuvragesEditComponent', () => {
  let component: OuvragesEditComponent;
  let fixture: ComponentFixture<OuvragesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OuvragesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OuvragesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
