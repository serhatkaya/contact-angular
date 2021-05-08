import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/core/base/services/base.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService extends BaseService<any> {
  constructor(private http: HttpClient) {
    super(http, 'User');
  }
}
