import { Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-delete-popup',
  templateUrl: './delete-popup.component.html',
  styleUrls: ['./delete-popup.component.scss']
})
export class DeletePopupComponent {

  constructor(public dialogRef: MatDialogRef<DeletePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }
    onNoClick(): void {
      this.dialogRef.close();
    }
  
}
