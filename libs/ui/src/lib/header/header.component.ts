import { Component } from '@angular/core';

@Component({
  selector: 'wabi-poc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public dockBasicItems: { label: string; icon: string }[];

  constructor() {
    this.dockBasicItems = [
      {
        label: 'Finder',
        icon: 'https://www.primefaces.org/primeng/assets/showcase/images/dock/finder.svg',
      },
      {
        label: 'App Store',
        icon: 'https://www.primefaces.org/primeng/assets/showcase/images/dock/appstore.svg',
      },
      {
        label: 'Photos',
        icon: 'https://www.primefaces.org/primeng/assets/showcase/images/dock/photos.svg',
      },
      {
        label: 'Trash',
        icon: 'https://www.primefaces.org/primeng/assets/showcase/images/dock/trash.png',
      },
    ];
  }
}
