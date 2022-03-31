import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarruselComponent } from './carrusel/carrusel.component';
//bootstrap
// import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [
    CarruselComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    CarruselComponent
  ]
})
export class MaterialModule { }
