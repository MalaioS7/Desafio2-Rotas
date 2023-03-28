import { Button1Module } from './button1/button1.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Desafio2RoutingModule } from './desafio2-routing.module';
import { Button2Component } from './button2/button2.component';
import { HomeComponent } from './home/home.component';
import { Button2Module } from './button2/button2.module';
import { FormsModule } from '@angular/forms';
import { Button3Component } from './button3/button3.component';
import { Button3Module } from './button3/button3.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    Desafio2RoutingModule,
    Button2Module,
    Button3Module,
    Button1Module,
    FormsModule
  ]
})
export class Desafio2Module { }
