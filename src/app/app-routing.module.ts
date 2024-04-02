import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CdListComponent } from './cd-list/cd-list.component';
import { CdDetailsComponent } from './cd-details/cd-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/cds', pathMatch: 'full' },
  { path: 'cds', component: CdListComponent },
  { path: 'cd/:id', component: CdDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
