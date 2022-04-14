import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../../../../plugin-corefrontoffice/app-settings';

@Component({
  selector: 'app-menu-home-publico',
  templateUrl: './menu-home-publico.component.html',
  styleUrls: ['./menu-home-publico.component.css']
})
export class MenuHomePublicoComponent implements OnInit {

  nameAPP: String;

  constructor() {
    this.nameAPP = AppSettings.APP_NAME;
  }

  ngOnInit(): void {
  }

}
