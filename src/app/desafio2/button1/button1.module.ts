import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Button1Component } from './button1.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [Button1Component]
})
export class Button1Module { }
