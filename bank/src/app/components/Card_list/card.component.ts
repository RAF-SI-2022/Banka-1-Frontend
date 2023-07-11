import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }


  goToMyProfile() {
    this.router.navigate(['/my-profile']);
  }

}
