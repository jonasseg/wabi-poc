import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'wabi-poc-wabi-poc',
  templateUrl: './wabi-poc.component.html',
  styleUrls: ['./wabi-poc.component.scss'],
})
export class WabiPocComponent implements OnInit {
  @Input() public menu!: MenuItem[];

  ngOnInit(): void {
    console.log(this.menu);
  }
}
