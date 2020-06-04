import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core';
import { SettingsComponent } from './settings.component';
// import { NoAuthGuard } from '../auth/no-auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    // canActivate: [NoAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {}
