import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Button2Component } from './button2/button2.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Desafio2RoutingModule { }
