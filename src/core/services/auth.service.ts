import { NotificationService } from './../components/toastr/services/notification.service';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { NotificationType } from '../components/toastr/models/notification.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(
    private http: HttpClient,
    private router: Router,
    private notificationService: NotificationService
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(login: User) {
    return this.http.post<any>(`${environment.apiUrl}/auth/login`, login).pipe(
      map((user) => {
        if (user.result) {
          localStorage.setItem('currentUser', JSON.stringify(user.result.user));
          this.currentUserSubject.next(user.result.user);
          this.router.navigate(['users']);
          this.notificationService.showNotification(
            NotificationType.Success,
            'Succesfully logged in!'
          );
        }
        return user;
      })
    );
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.notificationService.showNotification(
      NotificationType.Info,
      'Logged out'
    );
  }
}
