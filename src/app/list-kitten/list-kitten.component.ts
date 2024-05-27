import { Component, OnInit } from '@angular/core';
import { KittenService } from '../kitten.service';
import { Kitten } from '../kitten.model';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-kitten',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.scss']
})
export class ListKittenComponent implements OnInit {
  kittens: Kitten[] = []; // Utiliser le modèle Kitten
  selectedKitten: Kitten | null = null; // Utiliser le modèle Kitten

  constructor(private kittenService: KittenService) {}

  ngOnInit() {
    this.kittens = this.kittenService.getKittens();
  }

  showDetails(kitten: Kitten) {
    this.selectedKitten = kitten;
  }

  hideDetails() {
    this.selectedKitten = null;
  }

  adoptKitten(kitten: Kitten) {
    this.kittenService.addUserKitten(kitten);
    this.kittens = this.kittens.filter(k => k !== kitten);
  }
}