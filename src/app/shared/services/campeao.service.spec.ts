/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CampeaoService } from './campeao.service';

describe('CampeaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CampeaoService]
    });
  });

  it('should ...', inject([CampeaoService], (service: CampeaoService) => {
    expect(service).toBeTruthy();
  }));
});
