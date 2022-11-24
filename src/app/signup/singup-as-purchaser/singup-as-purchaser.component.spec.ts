import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingupAsPurchaserComponent } from './singup-as-purchaser.component';

describe('SingupAsPurchaserComponent', () => {
  let component: SingupAsPurchaserComponent;
  let fixture: ComponentFixture<SingupAsPurchaserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingupAsPurchaserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingupAsPurchaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
