import { Routes } from '@angular/router';
import { CdListComponent } from './cd-list/cd-list.component';
import { CdDetailsComponent } from './cd-details/cd-details.component';

export const routes: Routes = [
  { path: '', redirectTo: '/cds', pathMatch: 'full' },
  { path: 'cds', component: CdListComponent },
  { path: 'cd/:id', component: CdDetailsComponent }
];
