import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaussesComponent } from './chausses.component';

describe('ChaussesComponent', () => {
  let component: ChaussesComponent;
  let fixture: ComponentFixture<ChaussesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaussesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaussesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
