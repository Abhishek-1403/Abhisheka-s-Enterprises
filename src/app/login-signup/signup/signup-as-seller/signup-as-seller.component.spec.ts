import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupAsSellerComponent } from './signup-as-seller.component';

describe('SignupAsSellerComponent', () => {
  let component: SignupAsSellerComponent;
  let fixture: ComponentFixture<SignupAsSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupAsSellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupAsSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
