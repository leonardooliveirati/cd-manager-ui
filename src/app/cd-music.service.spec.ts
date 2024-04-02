import { TestBed } from '@angular/core/testing';

import { CdMusicService } from './cd-music.service';

describe('CdMusicService', () => {
  let service: CdMusicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CdMusicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
