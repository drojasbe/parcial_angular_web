/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { VehiculoService } from './vehiculo.service';
import { provideHttpClient } from '@angular/common/http';

describe('Service: Vehiculo}', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehiculoService, provideHttpClient()]
    });
  });

  it('should ...', inject([VehiculoService], (service: VehiculoService) => {
    expect(service).toBeTruthy();
  }));
});
