import { ComponentFixture, TestBed } from '@angular/core/testing';

import { storySegments } from '../common/constants';
import { StoryComponent } from './story.component';

describe('StoryComponent', () => {
  let component: StoryComponent;
  let fixture: ComponentFixture<StoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoryComponent]
    });
    fixture = TestBed.createComponent(StoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  describe('continueStory()', () => {
    it('should set story to arrival, increase tokenCount by 2, and add emphasize class to faz-token when id = easy', () => {
      component['continueStory']('easy');
      expect(component['story']).toEqual(storySegments[1]);
      expect(component['tokenCount']).toEqual(2);
      expect(document.querySelector('#faz-token')?.classList).toContain('emphasize');
    });

    it('should set story to arrival when id = normal', () => {
      component['continueStory']('normal');
      expect(component['story']).toEqual(storySegments[1]);
    });

    it('should set story to passes and showPasses to true when id = passes', () => {
      component['continueStory']('passes');
      expect(component['story']).toEqual(storySegments[2]);
      expect(component['showPasses']).toBe(true);
    });

    it('should set story to terminal when id = terminal', () => {
      component['continueStory']('terminal');
      expect(component['story']).toEqual(storySegments[3]);
    });

    it('should set story to gate when id = gate', () => {
      component['continueStory']('gate');
      expect(component['story']).toEqual(storySegments[4]);
    });

    it('should set story to vip when id = vip', () => {
      component['continueStory']('vip');
      expect(component['story']).toEqual(storySegments[5]);
    });

    it('should set story to agree when id = agree', () => {
      component['continueStory']('agree');
      expect(component['story']).toEqual(storySegments[6]);
    });
  });

  describe('restartStory()', () => {
    it('should remove emphasize class from faz-token', () => {
      document.querySelector('#faz-token')?.classList.add('emphasize');
      component['restartStory']();
      expect(document.querySelector('#faz-token')?.classList).not.toContain('emphasize');
    });

    it('should reset story to intro and tokenCount to 0', () => {
      component['story'] = storySegments[1];
      component['tokenCount'] = 2;
      component['restartStory']();
      expect(component['story']).toEqual(storySegments[0]);
      expect(component['tokenCount']).toEqual(0);
    });

    it('should reset showPasses to false', () => {
      component['showPasses'] = true;
      component['restartStory']();
      expect(component['showPasses']).toBe(false);
    });
  })
});
