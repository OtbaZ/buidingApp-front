import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispositifsEditComponent } from './dispositifs-edit.component';

describe('DispositifsEditComponent', () => {
  let component: DispositifsEditComponent;
  let fixture: ComponentFixture<DispositifsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispositifsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispositifsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
