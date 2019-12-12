import { Component } from '@angular/core';

@Component({
    selector: 'app-camera-upload1',
    templateUrl: './camera-upload1.page.html',
    styleUrls: ['./camera-upload1.page.scss'],
})
export class CameraUpload1Page {

    public test = 'Initial Message, should be different after taking a photo';

    constructor() { }

    public async uploadPWA(): Promise<void> {

        this.test = 'Photo has been selected, page should not refresh and wipe this out.';
    }

}
