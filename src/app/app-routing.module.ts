import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', // Ruta raíz
    loadChildren: () => import('./dashboard/modules/modules.module').then(m => {
      console.log('HomeModule is being loaded');
      return m.DashboardModule;
    })
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Habilita el seguimiento de rutas
  exports: [RouterModule]
})
export class AppRoutingModule {}
