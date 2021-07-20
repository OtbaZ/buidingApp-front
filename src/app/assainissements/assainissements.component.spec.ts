import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssainissementsComponent } from './assainissements.component';

describe('AssainissementsComponent', () => {
  let component: AssainissementsComponent;
  let fixture: ComponentFixture<AssainissementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssainissementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssainissementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
