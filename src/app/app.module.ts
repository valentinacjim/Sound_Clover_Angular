import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/modules/modules.module';
import { SharedModule } from '../shared/modules/modules.module';
import { PlayerComponent } from './core/components/player/player.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { HomeComponent } from './dashboard/home/home.component';

@NgModule({
  declarations: [
    SidebarComponent,
    AppComponent,
    PlayerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    DashboardModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
