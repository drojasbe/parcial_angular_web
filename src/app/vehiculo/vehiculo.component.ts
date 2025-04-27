import { Component, OnInit } from '@angular/core';
import { Vehiculo } from './vehiculo';
import { dataVehiculos } from './tempVehiculoData';
import { CommonModule } from '@angular/common';
import { VehiculoService } from './vehiculo.service';
import { ListarVehiculosComponent } from "./listarVehiculos/listarVehiculos.component";

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css'],
  imports: [CommonModule, ListarVehiculosComponent],
})
export class VehiculoComponent implements OnInit {

  vehiculos: Array<Vehiculo> = [];
  constructor(private vehiculoService: VehiculoService) {}

  ngOnInit() {
    this.setVehiculosList();
  }

  setVehiculosList(): void {
    this.vehiculoService.getVehiculos().subscribe(vehiculos => {
      this.vehiculos = vehiculos;
    });
  }
  getVehiculos(): Array<Vehiculo> {
    return this.vehiculos;
  }
}
