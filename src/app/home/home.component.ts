import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import $ from 'jquery';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 // map: any = mapboxgl.Map;
 // style = 'mapbox://styles/mapbox/streets-v11';
 

  constructor(private router:Router) { }

  ngOnInit(): void {
   // (mapboxgl as typeof mapboxgl).accessToken = environment.mapbox.accessToken;
   // this.map = new mapboxgl.Map({
   //   container: 'map',
     // style: this.style,
    ////  zoom: 5,
   //   center: [44.2107675, 20.9224158]
    //});
   // this.map.addControl(new mapboxgl.NavigationControl());

  }

 seeMore(){
   this.router.navigate(['/gallery']);
  };

 








}
