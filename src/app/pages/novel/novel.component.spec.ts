import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovelComponent } from './novel.component';

describe('NovelComponent', () => {
  let app: NovelComponent;
  let fixture: ComponentFixture<NovelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NovelComponent]
    });
    fixture = TestBed.createComponent(NovelComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create app', () => {
    expect(app).toBeTruthy();
  });
});
