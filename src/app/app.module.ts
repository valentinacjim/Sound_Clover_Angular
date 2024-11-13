import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './dashboard/modules/modules.module';
import { SharedModule } from '../shared/modules/modules.module';
import { PlayerComponent } from './core/components/player/player.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './src/app/core/components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    SharedModule,
    AppComponent,
    PlayerComponent,
    RouterModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
