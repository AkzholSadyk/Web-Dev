import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  template: `
    <article>
      <img class="listing-photo" [src]="housingLocation?.photo"
        alt="Exterior photo of {{housingLocation?.name}}"/>
      <section class="listing-description">
        <h2 class="listing-heading">{{housingLocation?.name}}</h2>
        
        <h4 class="listing-heading"> {{housingLocation?.price}} тг</h4>
        
        <p class="listing-location"> {{housingLocation?.rating}}</p>
        <p class="listing-location2"> {{housingLocation?.rating}}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this goods</h2>
        <ul>
          <li>Information: {{housingLocation?.info2}}</li>
        </ul>
      </section>
      <section class="listing-apply">
        <h2 class="section-heading">Apply now to Buy here</h2>
        <form [formGroup]="applyForm">
          <label for="first-name">First Name</label>
          <input id="first-name" type="text" formControlName="firstName">

          <label for="last-name">Last Name</label>
          <input id="last-name" type="text" formControlName="lastName">

          <label for="email">Email</label>
          <input id="email" type="email" formControlName="email">

          <button type="button" (click)="handleBuyNow()" class="primary">
            Buy Now
          </button>
        </form>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor() {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }

  handleBuyNow() {
    if (
      this.applyForm.value.firstName?.trim() &&
      this.applyForm.value.lastName?.trim() &&
      this.applyForm.value.email?.trim()
    ) {
      window.location.href = "https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000";
    } else {
      alert("Пожалуйста, заполните все поля формы перед покупкой!");
    }
  }
}
