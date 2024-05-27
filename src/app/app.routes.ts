import { Routes } from '@angular/router';
import { ListKittenComponent } from './list-kitten/list-kitten.component';
import { CreateKittenComponent } from './create-kitten/create-kitten.component';

export const routes: Routes = [
    { path: 'create', component: CreateKittenComponent },
  { path: 'list', component: ListKittenComponent },
 
  { path: '', redirectTo: '/list', pathMatch: 'full' },
];
