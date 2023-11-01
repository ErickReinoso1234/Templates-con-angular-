import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { WebComponent } from './web.component';
import { WebRoutingModule } from './web-routing.module';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { MarcaComponent } from './marca/marca.component';
import { PrecioComponent } from './precio/precio.component';




@NgModule({
  declarations: [
    CategoryComponent,
    ProductComponent,
    DashboardComponent,
    WebComponent,
    MarcaComponent,
    PrecioComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    WebRoutingModule,
    RouterModule
  ], 
  exports:[
    CategoryComponent,
    ProductComponent,
    DashboardComponent,
    WebComponent,
    WebRoutingModule,
    MarcaComponent,
    PrecioComponent
  ]
})
export class WebModule { }
/* Erick Reinoso */
