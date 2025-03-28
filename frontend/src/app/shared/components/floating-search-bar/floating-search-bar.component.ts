import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Forms
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

// Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@Component({
  selector: 'app-floating-search-bar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatIconModule
  ],
  templateUrl: './floating-search-bar.component.html',
  styleUrls: ['./floating-search-bar.component.scss']
})

export class FloatingSearchBarComponent {

  searchForm = new FormGroup({
    searchTerm: new FormControl(''),
    location: new FormControl('')
  });

  constructor() {

  }

  onSearch() {
    console.log('Search data:', this.searchForm.value);
  }
}
