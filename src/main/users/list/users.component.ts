import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { Columns, Config, DefaultConfig } from 'ngx-easy-table';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(public userService: UsersService) {}

  users$ = this.userService.getAllApi('1', '10');
  public configuration: Config;
  public columns: Columns[] = [
    { key: 'name', title: 'Name' },
    { key: 'username', title: 'Username' },
    { key: 'role', title: 'Role' },
  ];

  ngOnInit() {
    this.configuration = { ...DefaultConfig };
    this.configuration.searchEnabled = true;
  }
}
