import { Component } from '@angular/core';

@Component({
  selector: 'app-novel',
  templateUrl: './novel.component.html',
  styleUrls: ['./novel.component.scss']
})
export class NovelComponent {
  protected openDisclaimer(): void {
    document.querySelector('#novel-cover')?.classList.add('opacity');

    const dialog = document.querySelector('#disclaimer-modal') as HTMLDialogElement;
    dialog.showModal();
  }
}
