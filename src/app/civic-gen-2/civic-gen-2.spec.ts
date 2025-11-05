import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivicGen2 } from './civic-gen-2';

describe('CivicGen2', () => {
  let component: CivicGen2;
  let fixture: ComponentFixture<CivicGen2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CivicGen2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CivicGen2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
