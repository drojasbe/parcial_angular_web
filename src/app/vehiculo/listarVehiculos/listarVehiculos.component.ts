import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-listarVehiculos',
  templateUrl: './listarVehiculos.component.html',
  styleUrls: ['./listarVehiculos.component.css'],
  imports: [CommonModule ],
})
export class ListarVehiculosComponent implements OnInit {

  vehiculos: Array<Vehiculo> = [];
  totalForEach: Record<string, number> = {};

  constructor(private vehiculoService: VehiculoService) {}

  ngOnInit(): void {
    this.setVehiculosList();
    
  }

  setVehiculosList(): void {
    this.vehiculoService.getVehiculos().subscribe(vehiculos => {
      this.vehiculos = vehiculos;
      this.getTotalForEach(this.vehiculos);
    });
  }

  getTotalForEach(vehiculos: Vehiculo[]): any {
    this.totalForEach = vehiculos.reduce((acc: any, vehiculo) => {
      acc[vehiculo.marca] = (acc[vehiculo.marca] || 0) + 1;
      return acc;
    }, {});
  }

  getMarcaKeys(): string[] {
    return Object.keys(this.totalForEach);
  }
}
