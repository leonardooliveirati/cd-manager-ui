// cd-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CD } from '../cd.model';
import { CdMusicService } from '../cd-music.service';

@Component({
  selector: 'app-cd-list',
  templateUrl: './cd-list.component.html',
  styleUrls: ['./cd-list.component.css']
})
export class CdListComponent implements OnInit {
  cds: CD[] = [];
  displayedColumns: string[] = ['title', 'artist', 'genre']; // Columns to display in the table

  constructor(private cdService: CdMusicService) { }

  ngOnInit(): void {
    this.loadCDs();
  }

  loadCDs(): void {
    this.cdService.getAllCDs().subscribe(cds => {
      this.cds = cds;
    });
  }
}
