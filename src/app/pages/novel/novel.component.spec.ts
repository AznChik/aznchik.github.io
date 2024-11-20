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

  describe('openDisclaimer()', () => {
    it('should add opacity class to the novel-cover', () => {
      app['openDisclaimer']();
      expect(document.querySelector('#novel-cover')?.classList).toContain('opacity');
    });

    it('should show modal', () => {
      const dialog = document.querySelector('#disclaimer-modal') as HTMLDialogElement;
      spyOn(dialog, 'showModal');
      app['openDisclaimer']();
      expect(dialog.showModal).toHaveBeenCalled();
    });
  });
});
