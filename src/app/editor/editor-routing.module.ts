import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorComponent } from './editor.component';
// import { EditableListingResolver } from './editable-listing-resolver.service';
import { AuthGuard } from '../core';
import { SharedModule } from '../shared';
// import { NoAuthGuard } from '../auth/no-auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: EditorComponent,

  },
  {
    path: ':slug',
    component: EditorComponent,

    // resolve: {
    //   listing: EditableListingResolver
    // }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorRoutingModule {}
