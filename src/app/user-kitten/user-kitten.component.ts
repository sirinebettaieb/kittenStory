
import { Component, OnInit } from '@angular/core';
import { KittenService } from '../kitten.service';
import { Kitten } from '../kitten.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-kitten',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-kitten.component.html',
  styleUrl: './user-kitten.component.scss'
})
export class UserKittenComponent implements OnInit {
  userKittens: Kitten[] = []; // Utiliser le modèle Kitten

  constructor(private kittenService: KittenService) {}

  ngOnInit() {
    this.userKittens = this.kittenService.getUserKittens();
  }
}
