import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-ligne',
  templateUrl: './ligne.component.html',
  styleUrls: ['./ligne.component.css']
})

export class LigneComponent implements OnInit {

  dateObj: number = Date.now();

  transportChoix: string[];

  // uri: string = 'https://api-ratp.pierre-grimaud.fr/v4';

  // transports   : uri+'/lines.result';
  // lignes       : uri+'/lines/{type}.result.{type}.{number}.code';
  // directions   : uri+'/destinations/{type}/{ligne}.result.destinations.{number}.name';
  // stations     : uri+'/stations/{type}/{ligne}.result.stations.{number}.name';
  // traffic      : uri+'/schedules/{type}/{ligne}/{station}/{A ou R}.result.schedules.{number}.(code + .destination).message';
  // info         : uri+'/traffic/{type}/{ligne}.result.message';

  constructor(private HttpClient: HttpClient) {
  }

  getTransports() {
    return this.HttpClient.get(`https://api-ratp.pierre-grimaud.fr/v4/lines/`)
  }

  getLignes() {
    return this.HttpClient.get(`https://api-ratp.pierre-grimaud.fr/v4/lines/${transport}/`)
  }

  ngOnInit() {
    this.transportChoix = ['metros', 'RERs', 'tramway'];
  }
}
