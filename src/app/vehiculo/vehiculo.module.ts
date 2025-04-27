import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculoComponent } from './vehiculo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    VehiculoComponent,
    NgbModule,  
  ],
  exports: [
    VehiculoComponent
  ],
  // Removed bootstrap array as VehiculoComponent is standalone

})
export class VehiculoModule { }
