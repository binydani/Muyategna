import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterProvidersPage } from './register-providers.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterProvidersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterProvidersPageRoutingModule {}
