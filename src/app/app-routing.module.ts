import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Desafio2Module } from './desafio2/desafio2.module';
import { Button2Component } from './desafio2/button2/button2.component';
import { HomeComponent } from './desafio2/home/home.component';
import { Button1Component } from './desafio2/button1/button1.component';
import { Button3Component } from './desafio2/button3/button3.component';


const routes: Routes = [
  {path: '', component: HomeComponent},

  { path: 'button1', component: Button1Component},
  {path: 'button1', loadChildren: () => import('../app/desafio2/button1/button1.module').then(m => m.Button1Module)},

  {path: 'button2/:id', component: Button2Component},

  { path: 'button3/:id', component: Button3Component},
  {path: 'button3/:id', loadChildren: () => import('../app/desafio2/button3/button3.module').then(m => m.Button3Module)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
