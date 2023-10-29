import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public toggleSamples(action: string): void {
    const dialog = document.querySelector('#samples-modal') as HTMLDialogElement;
    action === 'open' ? dialog.showModal() : dialog.close();
  }
}
