import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'wabi-poc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public isIframe = false;

  constructor(private readonly translateService: TranslateService) {
    this.translateService.use('es-es');
  }

  ngOnInit(): void {
    this.isIframe = window !== window.parent && !window.opener;
  }
}
