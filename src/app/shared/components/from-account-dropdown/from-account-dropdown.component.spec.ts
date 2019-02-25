import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromAccountDropdownComponent } from './from-account-dropdown.component';

describe('FromAccountDropdownComponent', () => {
  let component: FromAccountDropdownComponent;
  let fixture: ComponentFixture<FromAccountDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromAccountDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromAccountDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
