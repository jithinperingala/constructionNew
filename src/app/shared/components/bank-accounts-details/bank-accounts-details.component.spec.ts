import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccountsDetailsComponent } from './bank-accounts-details.component';

describe('BankAccountsDetailsComponent', () => {
  let component: BankAccountsDetailsComponent;
  let fixture: ComponentFixture<BankAccountsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankAccountsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAccountsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
