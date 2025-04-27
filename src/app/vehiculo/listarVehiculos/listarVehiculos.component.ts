import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';

@Component({
  selector: 'app-listarVehiculos',
  templateUrl: './listarVehiculos.component.html',
  styleUrls: ['./listarVehiculos.component.css'],
  imports: [CommonModule ],
})
export class ListarVehiculosComponent implements OnInit {

  @Input() vehiculos: Array<Vehiculo> = [];

  ngOnInit(): void {
    // Initialization logic here
  }

}
