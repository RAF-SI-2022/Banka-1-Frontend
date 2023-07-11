import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'transaction-popup',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent implements OnInit {

  message: string = "";
  displayStyle = "none";

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  openPopup(message: string){
    this.message = message;
    this.displayStyle = "block";
  }

  closePopup() {
    this.displayStyle = "none";
  }
  cancel(): void {
    this.location.back();
  }
