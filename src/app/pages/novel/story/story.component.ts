import { Component } from '@angular/core';
import { storySegments } from '../common/constants';
import { Story } from '../common/models';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent {
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
    }
  }
  
  protected restartStory(): void {
    document.querySelector('#faz-token')?.classList.remove('emphasize');
    this.story = storySegments[0];
    this.tokenCount = 0;
  }
}
