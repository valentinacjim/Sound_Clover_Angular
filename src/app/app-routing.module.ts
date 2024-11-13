import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from 'src/app/dashboard/home/home.component';

const routes: Routes = [
  {
    path: "", component: AppComponent, children: [
      { path: "home", component: HomeComponent },
      { path: "**", component: HomeComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
