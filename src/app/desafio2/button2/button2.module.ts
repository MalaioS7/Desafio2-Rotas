import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Button2Component } from './button2.component';

const routes: Routes = [
  {path: 'button2/:id', component: Button2Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [Button2Component]
})
export class Button2Module { }
