import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KaspiKzComponent } from "./kaspi-kz/kaspi-kz.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  imports: [FormsModule, KaspiKzComponent,  ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  product = {
    name: 'Смартфон Apple iPhone 13 128Gb черный',
    price: 263521,
    creditPrice: 15713,
    creditMonths: 24,
    color: 'черный',
    storage: 128,
    rating: 5,
    reviews: 3026,
    discount: '5% Б',
    images: [
      '/assets/images/image.png',
      '/assets/images/image2.png',
      '/assets/images/image3.png',
      '/assets/images/image4.png',
      '/assets/images/image5.png'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-black'
  };

  selectedImage = this.product.images[0];

  // selectImage(image: string) {
  //   this.selectedImage = image;
  // }

  openKaspi() {
    window.open(this.product.link, '_blank');
  }
}


