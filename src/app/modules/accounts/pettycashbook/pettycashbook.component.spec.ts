import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PettycashbookComponent } from './pettycashbook.component';

describe('PettycashbookComponent', () => {
  let component: PettycashbookComponent;
  let fixture: ComponentFixture<PettycashbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PettycashbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PettycashbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
