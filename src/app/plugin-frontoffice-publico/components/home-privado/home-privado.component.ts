import { Component, OnInit } from '@angular/core';

declare var M: any;

@Component({
  selector: 'app-home-privado',
  templateUrl: './home-privado.component.html',
  styleUrls: ['./home-privado.component.css']
})
export class HomePrivadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    M.AutoInit();
  }

}
