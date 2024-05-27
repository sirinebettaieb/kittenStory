import { Injectable } from '@angular/core';
import { Kitten } from './kitten.model';

@Injectable({
  providedIn: 'root'
})
export class KittenService {
  private kittens: Kitten[] = [];
  private userKittens: Kitten[] = [];

  constructor() { }

  addKitten(kitten: Kitten) {
    this.kittens.push(kitten);
  }

  getKittens(): Kitten[] {
    return this.kittens;
  }

  addUserKitten(kitten: Kitten) {
    this.userKittens.push(kitten);
  }

  getUserKittens(): Kitten[] {
    return this.userKittens;
  }
}