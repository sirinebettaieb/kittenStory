import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KittenService } from '../kitten.service';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-create-kitten',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-kitten.component.html',
  styleUrl: './create-kitten.component.scss'
})
export class CreateKittenComponent {
  
  kitten = { name: '', imageUrl: '' };

  constructor(private kittenService: KittenService) {}

  
  addKitten() {
    if (this.kitten.name && this.kitten.imageUrl) {
      this.kittenService.addKitten(this.kitten);
      this.kitten = { name: '', imageUrl: '' }; // Reset form
    }
  }
}
