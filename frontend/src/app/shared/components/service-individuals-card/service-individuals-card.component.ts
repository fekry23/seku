import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-individuals-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-individuals-card.component.html',
  styleUrls: ['./service-individuals-card.component.scss']
})
export class ServiceIndividualsCardComponent {
  name = 'User Name';
  imageUrl = 'assets/images/individuals/individual-1.jpg';
  location = 'New York, NY';
  description = 'Professional Plumber with 10+ years of experience.';
  rating = '4.8/5';

  imageExists = true;

  // Optional: Random color from palette (add more if you want variety)
  avatarColors = [
    '#8bca84', // green
    '#7bbf97', // sea green
    '#9ad1a3', // mint
    '#5db98d', // teal
    '#80b1d3', // blue
    '#f6b26b', // soft orange
    '#c27ba0', // mauve
    '#e06666', // salmon red
    '#ffd966', // yellow
    '#a4c2f4'  // light blue
  ];
  avatarColor = this.avatarColors[Math.floor(Math.random() * this.avatarColors.length)];

  onImageError() {
    this.imageExists = false;
  }

  getInitials(fullName: string): string {
    return fullName
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  }
}
