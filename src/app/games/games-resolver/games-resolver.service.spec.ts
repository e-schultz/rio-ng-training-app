import { TestBed } from '@angular/core/testing';

import { GamesResolverService } from './games-resolver.service';

describe('GamesResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GamesResolverService = TestBed.get(GamesResolverService);
    expect(service).toBeTruthy();
  });
});
