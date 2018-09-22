import { TestBed } from '@angular/core/testing';

import { ImageRequestService } from './image-request.service';

describe('ImageRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageRequestService = TestBed.get(ImageRequestService);
    expect(service).toBeTruthy();
  });
});
