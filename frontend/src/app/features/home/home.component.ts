import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { FloatingSearchBarComponent } from '../../shared/components/floating-search-bar/floating-search-bar.component';
import { ServiceIndividualsCardComponent } from "../../shared/components/service-individuals-card/service-individuals-card.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, FloatingSearchBarComponent, ServiceIndividualsCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  isMobile: boolean = false;

  constructor(private responsive: BreakpointObserver) {

  }

  ngOnInit() {
    this.responsive.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

}
