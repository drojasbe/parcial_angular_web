/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { ListarVehiculosComponent } from './listarVehiculos.component';
import { VehiculoService } from '../vehiculo.service';
import { Vehiculo } from '../vehiculo';
import { of } from 'rxjs';

class MockVehiculoService {
  getVehiculos() {
    return of([
      new Vehiculo(
        faker.number.int(),
        'Renault',
        'Kangoo',
        'VU Express',
        2017,
        93272,
        'Blanco',
        faker.image.url(),
      ),
      new Vehiculo(
        faker.number.int(),
        'Chevrolet',
        'Sail',
        'LT Sedan',
        2016,
        94321,
        'Rojo',
        faker.image.url(),
      ),
    ]);
  }
}


describe('ListarVehiculosComponent', () => {
  let component: ListarVehiculosComponent;
  let fixture: ComponentFixture<ListarVehiculosComponent>;
  let debug: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [ ListarVehiculosComponent ],
      providers: [
        { provide: VehiculoService, useClass: MockVehiculoService },  
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Component has a table", () => {
    expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThan(0);
  });

  it('should display the total number of vehicles for each brand', () => {
    component.getTotalForEach(component.vehiculos);
    fixture.detectChanges();

    const marcas = component.getMarcaKeys();
    expect(marcas.length).toBeGreaterThan(0);

    marcas.forEach((marca) => {
      const element = debug.query(By.css(`p:contains('${marca}')`));
      expect(element).toBeTruthy(); 
    });
  });
 
});
