import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArregloRoutingModule } from './arreglo-routing.module';
import { ArregloComponent } from './arreglo.component';
import { NewFormComponent } from './new-form/new-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ArregloComponent,
    NewFormComponent
  ],
  exports:[
    ArregloComponent
  ],
  imports: [
    CommonModule,
    ArregloRoutingModule,
    FormsModule
  ]
})
export class ArregloModule { }
