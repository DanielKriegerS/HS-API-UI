import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDisplayComponent } from './register-display.component';

describe('RegisterDisplayComponent', () => {
  let component: RegisterDisplayComponent;
  let fixture: ComponentFixture<RegisterDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
