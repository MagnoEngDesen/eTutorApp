import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosPerfilPage } from './dados-perfil.page';

const routes: Routes = [
  {
    path: '',
    component: DadosPerfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosPerfilPageRoutingModule {}
