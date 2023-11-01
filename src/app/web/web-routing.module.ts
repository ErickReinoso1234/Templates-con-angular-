import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { WebComponent } from './web.component';
import { MarcaComponent } from './marca/marca.component';
import { PrecioComponent } from './precio/precio.component';

const routes: Routes = [
  {path:'dashboard', component:DashboardComponent, 
  children :[ 
    // {path: '', component:DashboardComponent},
    {path: 'product', component:ProductComponent},
    {path: 'category', component:CategoryComponent},
    {path: 'marca', component:MarcaComponent },
    {path: 'precio', component:PrecioComponent}
  ],
  }
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forChild(routes)],
})
export class WebRoutingModule { }
