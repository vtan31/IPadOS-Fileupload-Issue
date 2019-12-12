import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'camera-upload-1', pathMatch: 'full' },
  {
    path: 'camera-upload-1',
    loadChildren: () => import('./camera-upload1/camera-upload1.module').then( m => m.CameraUpload1PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
