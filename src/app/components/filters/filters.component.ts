import { Component } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  brands = ['Chrysler', 'Hyundai', 'Honda', 'Ivory', 'Jaguar', 'Kia'];
  types = ['All', 'Sedan', 'Hatchback', 'SUV'];
}
