import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Button3Component } from './button3.component';

const routes: Routes = [
  {path: 'button3/:id', component: Button3Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [Button3Component]
})
export class Button3Module { }
