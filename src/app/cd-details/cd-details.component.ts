import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CD } from '../cd.model';
import { CdMusicService } from '../cd-music.service';

@Component({
  selector: 'app-cd-details',
  templateUrl: './cd-details.component.html',
  styleUrls: ['./cd-details.component.css']
})
export class CdDetailsComponent implements OnInit {
  cd: CD | undefined;

  constructor(
    private route: ActivatedRoute,
    private cdService: CdMusicService
  ) { }

  ngOnInit(): void {
    this.loadCD();
  }

  loadCD(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.cdService.getCDById(id).subscribe(cd => {
      this.cd = cd;
    });
  }
}
