import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HamburgerBtnComponent } from '../hamburger-btn/hamburger-btn.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, MatIconModule, HamburgerBtnComponent, MatSidenavModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isMobile: boolean = false;
  isMenuOpen: boolean = false;

  @Output() menuToggle = new EventEmitter<boolean>();

  constructor(private responsive: BreakpointObserver) {

  }

  ngOnInit() {
    this.responsive.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;

      // Close mobile nav-bar when it's not in mobile view
      if (!this.isMobile) {
        this.isMenuOpen = false;
        this.menuToggle.emit(false);
      }
    });
  }

  handleMenuToggle(isMenuOpen: boolean) {
    this.isMenuOpen = isMenuOpen;
    this.menuToggle.emit(this.isMenuOpen);
  }
}
