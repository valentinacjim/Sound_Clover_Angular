import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', // Ruta raíz
    loadChildren: () =>
      import('./dashboard/modules/modules.module').then(m => m.DashboardModule) // Carga diferida
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configuración principal de rutas
  exports: [RouterModule]
})
export class AppRoutingModule {}