import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerOffErrorComponent } from './server-off-error.component';

describe('ServerOffErrorComponent', () => {
  let component: ServerOffErrorComponent;
  let fixture: ComponentFixture<ServerOffErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServerOffErrorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerOffErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
