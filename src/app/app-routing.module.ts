import { EmpleadoComponent } from './components/Empleado/empleado.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente2Component } from './components/componente2/componente2.component';
import { Componente3Component } from './components/componente3/componente3.component';
import { Componente4Component } from './components/componente4/componente4.component';
import { Componente5Component } from './components/componente5/componente5.component';
import { HomeComponent } from './components/home/home.component';



const ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'componente2', component: Componente2Component},
  {path: 'componente3', component: Componente3Component},
  {path: 'componente4', component: Componente4Component},
  {path: 'componente5', component: Componente5Component},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'Empleado', component: EmpleadoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],


  exports: [RouterModule]
})
export class AppRoutingModule { }
