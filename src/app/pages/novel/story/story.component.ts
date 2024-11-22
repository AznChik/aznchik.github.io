import { Component } from '@angular/core';
import { storySegments } from '../common/constants';
import { Story } from '../common/models';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent {
  protected showPasses: boolean = false;
  protected story: Story = storySegments[0];
  protected tokenCount: number = 0;

  protected continueStory(id: string): void {
    switch (id) {
      case 'easy':
        this.story = storySegments[1];
        this.tokenCount += 2;
        document.querySelector('#faz-token')?.classList.add('emphasize');
        break;
      case 'normal':
        this.story = storySegments[1];
        break;
      case 'passes':
        this.story = storySegments[2];
        this.showPasses = true;
        break;
      case 'terminal':
        this.story = storySegments[3];
        break;
      case 'gate':
        this.story = storySegments[4];
        break;
      case 'vip':
        this.story = storySegments[5];
        break;
      case 'agree':
        this.story = storySegments[6];
        break;
      case 'disagree':
        this.story = storySegments[7];
        break;
      case 'bowling':
        this.story = storySegments[8];
    }
  }
  
  protected restartStory(): void {
    document.querySelector('#faz-token')?.classList.remove('emphasize');
    this.story = storySegments[0];
    this.tokenCount = 0;
    this.showPasses = false;
  }
}
