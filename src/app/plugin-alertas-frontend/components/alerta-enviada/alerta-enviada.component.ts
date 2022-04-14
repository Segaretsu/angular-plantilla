import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AlertMessages } from '../../../plugin-corefrontoffice/models/alert-messages';
import { Alerta } from '../../models/alerta';

@Component({
  selector: 'app-alerta-enviada',
  templateUrl: './alerta-enviada.component.html',
  styleUrls: ['./alerta-enviada.component.css']
})
export class AlertaEnviadaComponent implements OnInit {

  alerta: Alerta;

  constructor(private activatedRoute: ActivatedRoute) { 
    this.alerta = new Alerta();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      if(params.nombreAlerta === 'activar-cuenta') {
        this.alerta.getAlertaActivarCuenta();
      } else if(params.nombreAlerta === 'cuenta-activada') {
        this.alerta.getAlertaCuentaActivada();
      }
    }, (err) => {
      AlertMessages.showMessage('Algo a salido mal', AlertMessages.ERROR);
    });
  }

}
