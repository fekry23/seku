import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hamburger-btn',
  imports: [],
  templateUrl: './hamburger-btn.component.html',
  styleUrl: './hamburger-btn.component.scss'
})
export class HamburgerBtnComponent {
  isMenuOpen: boolean = false;

  @Output() menuToggle = new EventEmitter<boolean>();

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.menuToggle.emit(this.isMenuOpen);
  }
}
