import { Component, OnInit } from '@angular/core';
import { Vehiculo } from './vehiculo';
import { dataVehiculos } from './tempVehiculoData';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
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
