import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeProduct1Component } from './fake-product1.component';

describe('FakeProduct1Component', () => {
  let component: FakeProduct1Component;
  let fixture: ComponentFixture<FakeProduct1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FakeProduct1Component]
    });
    fixture = TestBed.createComponent(FakeProduct1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
