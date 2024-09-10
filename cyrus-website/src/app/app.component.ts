import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Variable to track if the menu is active (visible)
  isMenuActive: boolean = false;

  // Function to toggle the menu
  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }
}
