import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})

// tar emot users från dashboard och skickar med en egenskap (textColor)
export class UsersListComponent implements OnInit {

  textColor: boolean;
  @Input() users: string[];
  constructor() { }

  ngOnInit() {
  }
  // togglar mellan sant och falskt vid varje klick på toggle-knappen. Vilket skickas med till user-list-item.
  toggleFontColor() {
    this.textColor = !this.textColor;
  }

}
