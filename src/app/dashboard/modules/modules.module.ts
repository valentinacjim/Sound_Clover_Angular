import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { ModulesRoutingModule } from './modules-routing.module';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule
  ],
  exports: []
  
})
export class DashboardModule { }
