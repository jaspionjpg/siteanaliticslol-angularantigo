/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JogadorService } from './jogador.service';

describe('JogadorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JogadorService]
    });
  });

  it('should ...', inject([JogadorService], (service: JogadorService) => {
    expect(service).toBeTruthy();
  }));
});
