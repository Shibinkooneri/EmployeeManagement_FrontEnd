import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtdComponent } from './addtd.component';

describe('AddtdComponent', () => {
  let component: AddtdComponent;
  let fixture: ComponentFixture<AddtdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddtdComponent]
    });
    fixture = TestBed.createComponent(AddtdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
