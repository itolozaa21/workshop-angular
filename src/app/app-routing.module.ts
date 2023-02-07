import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArregloComponent } from './pages/arreglo/arreglo.component';

const routes: Routes = [
  {path: '' , component: ArregloComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
