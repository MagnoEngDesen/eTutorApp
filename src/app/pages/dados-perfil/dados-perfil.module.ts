import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosPerfilPageRoutingModule } from './dados-perfil-routing.module';

import { DadosPerfilPage } from './dados-perfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosPerfilPageRoutingModule
  ],
  declarations: [DadosPerfilPage]
})
export class DadosPerfilPageModule {}
