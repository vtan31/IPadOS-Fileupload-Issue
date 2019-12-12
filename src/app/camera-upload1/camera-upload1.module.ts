import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CameraUpload1PageRoutingModule } from './camera-upload1-routing.module';
import { CameraUpload1Page } from './camera-upload1.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CameraUpload1PageRoutingModule
    ],
    declarations: [CameraUpload1Page]
})
export class CameraUpload1PageModule { }
