import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
// Importa el módulo Vehiculo
import { VehiculoModule } from './vehiculo/vehiculo.module';


@NgModule({
  declarations: [	
    AppComponent
   ],
  imports: [
    BrowserModule,
    VehiculoModule, 
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
