import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToAccountDropdownComponent } from './to-account-dropdown.component';

describe('ToAccountDropdownComponent', () => {
  let component: ToAccountDropdownComponent;
  let fixture: ComponentFixture<ToAccountDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToAccountDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToAccountDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
