import { TestBed } from '@angular/core/testing';

import { IboLibraryService } from './ibo-library.service';

describe('IboLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IboLibraryService = TestBed.get(IboLibraryService);
    expect(service).toBeTruthy();
  });
});
