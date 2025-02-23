import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">{{ housingLocation.city}}</p>
      <p class="listing-location2">a</p>
      <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
      <p class= "count">Likes: {{ housingLocation.likes || 0 }}</p>
      <button class = "erom" (click)="likeHousing(housingLocation)">❤️ Like</button>
      
    </section>
  `,
  styleUrls: ['./housing-location.component.css'],
})

export class HousingLocationComponent {

  @Input() housingLocation!: HousingLocation;
  likeHousing(housingLocation: HousingLocation) {
    if (!housingLocation.likes) {
      housingLocation.likes = 0;
    }
    housingLocation.likes++;
  }
  
  
}