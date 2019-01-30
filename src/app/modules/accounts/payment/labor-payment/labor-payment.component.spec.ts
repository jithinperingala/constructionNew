import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaborPaymentComponent } from './labor-payment.component';

describe('LaborPaymentComponent', () => {
  let component: LaborPaymentComponent;
  let fixture: ComponentFixture<LaborPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaborPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaborPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
