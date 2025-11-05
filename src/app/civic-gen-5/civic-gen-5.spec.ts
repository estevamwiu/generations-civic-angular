import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivicGen5 } from './civic-gen-5';

describe('CivicGen5', () => {
  let component: CivicGen5;
  let fixture: ComponentFixture<CivicGen5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CivicGen5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CivicGen5);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
