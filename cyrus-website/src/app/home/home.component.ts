import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  private currentSlide: number = 0;
  private slides: HTMLElement[] = [];
  private totalSlides: number = 0;

  ngAfterViewInit() {
    this.slides = Array.from(document.querySelectorAll('.carousel-slide')) as HTMLElement[];
    this.totalSlides = this.slides.length;
    this.showSlide(this.currentSlide);
    setInterval(() => this.nextSlide(), 3000); // Change slide every 3 seconds
  }

  private showSlide(index: number) {
    this.slides.forEach((slide, i) => {
      slide.style.opacity = (i === index) ? '1' : '0';
    });
  }

  private nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    this.showSlide(this.currentSlide);
  }
}
