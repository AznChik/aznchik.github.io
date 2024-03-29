import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  describe('toggleSamples()', () => {
    it('should show modal when action = open', () => {
      const dialog = document.querySelector('#samples-modal') as HTMLDialogElement;
      spyOn(dialog, 'showModal');
      component.toggleSamples('open');
      expect(dialog.showModal).toHaveBeenCalled();
    });

    it('should scroll to top when modal opens', () => {
      const dialog = document.querySelector('#samples-modal') as HTMLDialogElement;
      spyOn(dialog, 'scrollTo');
      component.toggleSamples('open');
      expect(dialog.scrollTo).toHaveBeenCalledWith(0, 0);
    });

    it('should close modal when action != open', () => {
      const dialog = document.querySelector('#samples-modal') as HTMLDialogElement;
      spyOn(dialog, 'close');
      component.toggleSamples('close');
      expect(dialog.close).toHaveBeenCalled();
    });
  });
});
