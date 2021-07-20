import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrassementsComponent } from './terrassements.component';

describe('TerrassementsComponent', () => {
  let component: TerrassementsComponent;
  let fixture: ComponentFixture<TerrassementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerrassementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrassementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
