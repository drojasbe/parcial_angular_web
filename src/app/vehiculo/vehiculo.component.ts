import { Component, OnInit } from '@angular/core';
import { Vehiculo } from './vehiculo';
import { dataVehiculos } from './tempVehiculoData';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css'],
  imports: [CommonModule],
})
export class VehiculoComponent implements OnInit {

  vehiculos: Array<Vehiculo> = [];
  constructor() { }

  ngOnInit() {
    this.vehiculos = this.getVehiculosList();
  }

  getVehiculosList(): Array<Vehiculo> {
    return dataVehiculos;
  }

}
