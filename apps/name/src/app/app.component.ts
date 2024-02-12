import { Component } from '@angular/core';

@Component({
  selector: 'name-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sideNavOpen = false;
  title = 'name';

  sideNavToggle(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }
}
