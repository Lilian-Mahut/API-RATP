import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { ratpApiService } from './../ratpApi.service';

@Component({
  selector: 'app-ligne',
  templateUrl: './ligne.component.html',
  styleUrls: ['./ligne.component.css']
})

export class LigneComponent implements OnInit {

  dateObj: number = Date.now();   // DECLARATION HORLOGE

  transportListe: string;
  transport: string;
  tramsports: string;
  ligneListe: string;
  ligne: string;
  lignes: string;
  directionListe: string;
  direction: string;
  directions: string;
  stationListe: string;
  station: string;
  stations: string;

  // private _apiUrl = 'https://api-ratp.pierre-grimaud.fr/v4';

  // transports   : uri+'/lines.result';
  // lignes       : uri+'/lines/{type}.result.{type}.{number}.code';
  // directions   : uri+'/destinations/{type}/{ligne}.result.destinations.{number}.name';
  // stations     : uri+'/stations/{type}/{ligne}.result.stations.{number}.name';
  // traffic      : uri+'/schedules/{type}/{ligne}/{station}/{A ou R}.result.schedules.{number}.(code + .destination).message';
  // info         : uri+'/traffic/{type}/{ligne}.result.message';

  constructor(private http: HttpClient) {

    // HORLOGE
    setInterval(() => {
      this.dateObj = Date.now();
    }, 1);

  }

  // getTransports() {
  //   return this._httpClient.get(`https://api-ratp.pierre-grimaud.fr/v4/lines/lines`)
  // }

  // getLignes() {
  //   return this._httpClient.get(`https://api-ratp.pierre-grimaud.fr/v4/lines/metros`)
  // }

  // getDirections() {
  //   return this._httpClient.get(`https://api-ratp.pierre-grimaud.fr/v4/destinations/`)
  // }

  // getStations() {
  //   return this._httpClient.get(`this._apiUrl`)
  // }

  ngOnInit() {
   }
}
