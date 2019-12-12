import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CameraUpload1Page } from './camera-upload1.page';

const routes: Routes = [
  {
    path: '',
    component: CameraUpload1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CameraUpload1PageRoutingModule {}
