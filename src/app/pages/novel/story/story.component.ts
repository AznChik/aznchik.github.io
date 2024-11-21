import { Component } from '@angular/core';
import { intro } from '../common/constants';
import { Story } from '../common/models';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent {
  protected story: Story = intro;
  
  protected restartStory(): void { }
}
