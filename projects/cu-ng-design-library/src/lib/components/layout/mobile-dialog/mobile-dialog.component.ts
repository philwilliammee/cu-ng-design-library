import { Component, Inject, Input, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DialogData {
  routes?: Routes;
}

@Component({
  selector: 'lib-mobile-dialog',
  templateUrl: './mobile-dialog.component.html',
  styleUrls: ['./mobile-dialog.component.scss'],
})
export class MobileDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {}
}
