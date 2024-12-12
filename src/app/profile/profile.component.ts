import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { PropertyService } from '../property.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: []
})
export class ProfileComponent implements OnInit {
  estimates: any[] = [];
  users: any[] = [];

  constructor(private authService: AuthService, private propertyService: PropertyService, private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.propertyService.getUserEstimates().subscribe(estimates => {
      this.estimates = estimates;
    });

    if (this.authService.currentUserValue.role === 'admin') {
      this.http.get<any[]>('/api/users/all').subscribe(users => {
        this.users = users;
      });
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
