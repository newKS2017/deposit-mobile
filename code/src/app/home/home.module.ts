import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRouting,routeds } from './home.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ...routeds
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HomeModule { }
