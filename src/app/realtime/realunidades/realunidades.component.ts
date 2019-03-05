import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-realunidades',
  templateUrl: './realunidades.component.html',
  styleUrls: ['./realunidades.component.css']
})
export class RealunidadesComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor() { }

  ngOnInit() {
  }

}
