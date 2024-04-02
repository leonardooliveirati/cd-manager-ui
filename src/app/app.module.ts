import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { CdListComponent } from './cd-list/cd-list.component'; // Importe o CdListComponent
import { CdDetailsComponent } from './cd-details/cd-details.component'; // Importe o CdDetailsComponent

const routes: Routes = [
  { path: '', redirectTo: '/cds', pathMatch: 'full' },
  { path: 'cds', component: CdListComponent },
  { path: 'cd/:id', component: CdDetailsComponent }
];

@NgModule({
  declarations: [
    CdListComponent,
    CdDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatTableModule

  ],
  providers: [],
  //bootstrap: [AppComponent]
})
export class AppModule { }
