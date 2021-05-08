import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-component',
  templateUrl: './master-component.component.html',
  styleUrls: ['./master-component.component.scss'],
})
export class MasterComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit() {}
}
