import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFormComponent } from './cardForm.component';

describe('CardComponent', () => {
  let component: CardFormComponent;
  let fixture: ComponentFixture<CardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
