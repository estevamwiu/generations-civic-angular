import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivicGen4 } from './civic-gen-4';

describe('CivicGen4', () => {
  let component: CivicGen4;
  let fixture: ComponentFixture<CivicGen4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CivicGen4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CivicGen4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
