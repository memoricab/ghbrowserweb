import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
    message: string;
    title: string;
}

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html'
})
export class Alert {

    constructor(
        public dialogRef: MatDialogRef<Alert>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}