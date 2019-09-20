import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ligne',
  templateUrl: './ligne.component.html',
  styleUrls: ['./ligne.component.css']
})

export class LigneComponent implements OnInit {

  dateObj: number = Date.now();   // DECLARATION HORLOGE
  ratpForm: FormGroup;
  transportListe: string[];

  // private _apiUrl = 'https://api-ratp.pierre-grimaud.fr/v4';

  // transports   : uri+'/lines.result';
  // lignes       : uri+'/lines/{type}.result.{type}.{number}.code';
  // directions   : uri+'/destinations/{type}/{ligne}.result.destinations.{number}.name';
  // stations     : uri+'/stations/{type}/{ligne}.result.stations.{number}.name';
  // traffic      : uri+'/schedules/{type}/{ligne}/{station}/{A ou R}.result.schedules.{number}.(code + .destination).message';
  // info         : uri+'/traffic/{type}/{ligne}.result.message';

  constructor(private _httpClient: HttpClient, private fb: FormBuilder) {

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
    this.transportListe = ["metros", "rers", "tramways"];

    this.ratpForm = this.fb.group({
      transport : ['',[Validators.required]],
      ligne     : ['', [Validators.required]],
      direction : ['', [Validators.required]],
      station   : ['', [Validators.required]]
    })
   }
}
