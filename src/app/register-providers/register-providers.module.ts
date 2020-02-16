import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterProvidersPageRoutingModule } from './register-providers-routing.module';

import { RegisterProvidersPage } from './register-providers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterProvidersPageRoutingModule
  ],
  declarations: [RegisterProvidersPage]
})
export class RegisterProvidersPageModule {}
