import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarVehiculosComponent } from "./listarVehiculos/listarVehiculos.component";

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css'],
  imports: [CommonModule, ListarVehiculosComponent],
})
export class VehiculoComponent implements OnInit {

  constructor() {}

  ngOnInit() {
 
  }
  
}
