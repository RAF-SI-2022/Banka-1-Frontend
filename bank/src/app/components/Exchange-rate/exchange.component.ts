import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'exchange-component',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {


  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }



}
