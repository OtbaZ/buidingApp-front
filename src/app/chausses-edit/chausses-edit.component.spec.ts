import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaussesEditComponent } from './chausses-edit.component';

describe('ChaussesEditComponent', () => {
  let component: ChaussesEditComponent;
  let fixture: ComponentFixture<ChaussesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaussesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaussesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
