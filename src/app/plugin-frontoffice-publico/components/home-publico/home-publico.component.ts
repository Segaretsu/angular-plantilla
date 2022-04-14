import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../../../plugin-corefrontoffice/app-settings';

@Component({
  selector: 'app-home-publico',
  templateUrl: './home-publico.component.html',
  styleUrls: ['./home-publico.component.css']
})
export class HomePublicoComponent implements OnInit {

  readonly nameApp;

  constructor() {
    this.nameApp = AppSettings.APP_NAME;
  }

  ngOnInit(): void {
  }

}
