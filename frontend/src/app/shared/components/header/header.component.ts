import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [CommonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  isMobile: boolean = false;

  constructor(private responsive: BreakpointObserver) {

  }

  ngOnInit() {

    this.responsive.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });

  }

}
