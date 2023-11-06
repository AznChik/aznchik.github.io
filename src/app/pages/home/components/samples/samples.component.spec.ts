import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplesComponent } from './samples.component';

describe('SamplesComponent', () => {
  let component: SamplesComponent;
  let fixture: ComponentFixture<SamplesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SamplesComponent]
    });
    fixture = TestBed.createComponent(SamplesComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
