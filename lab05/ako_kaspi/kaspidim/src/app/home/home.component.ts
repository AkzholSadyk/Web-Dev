import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent
  ],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by category" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
    <div *ngFor="let housingLocation of filteredLocationList" class="location-card">
    <app-housing-location
      [housingLocation]="housingLocation">
    </app-housing-location>
    <button (click)="likeHousing(housingLocation)">❤️ Like</button>
    <button (click)="removeHousing(housingLocation)">🗑️ Delete</button>
  </div>
    </section>
    
  `,
  styleUrls: ['./home.component.css'],
})

export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
    
  }
  likeHousing(housingLocation: HousingLocation) {
    alert(`Liked: ${housingLocation.city}`);
  }
  
  removeHousing(housingLocation: HousingLocation) {
    this.filteredLocationList = this.filteredLocationList.filter(
      item => item !== housingLocation
    );
    this.housingLocationList = this.housingLocationList.filter(
      item => item !== housingLocation
    );
  }

  // ako
}