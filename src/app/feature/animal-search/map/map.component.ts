import { Component, OnInit, AfterViewInit, Input, OnChanges } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() sittingList: Array<any>;
  map;

  smallIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png',
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png',
    iconSize:    [25, 41],
    iconAnchor:  [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowSize:  [41, 41]
  });

  constructor() { }
  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    this.addMarker(this.sittingList);

  }

  ngAfterViewInit(): void {
    this.createMap();
  }

  ngOnInit() {

  }

  createMap() {
    const paris = {
      lat: 48.8534,
      lng: 2.3488
    };
    const zoomLvl = 12;
    this.map = L.map('map', {
      center: [paris.lat, paris.lng],
      zoom: zoomLvl
    });

    const mainLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom: 1,
      maxZoom: 17,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    mainLayer.addTo(this.map);

  }

  addMarker(sittingList) {
    for (const s of sittingList) {
      console.log('MARKER LON ' + s.lon + ' LAT ' + s.lat);


      const marker = L.marker([s.lat, s.lon], { icon: this.smallIcon }).bindPopup(s.title);
      marker.addTo(this.map);
    }
  }

}
