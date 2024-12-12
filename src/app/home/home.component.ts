import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { PropertyService } from '../property.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isPrepared: string = '';
  rooms: number = 0;
  windows: number = 0;
  radiators: number = 0;
  lights: number = 0;
  username: string = '';
  userId: string = '';

  constructor(private authService: AuthService, private propertyService: PropertyService, private router: Router) {}

  ngOnInit(): void {
    this.username = this.authService.getUsername();
    this.userId = this.authService.getUserId();
  }

  onSubmit() {
    if (!this.isPrepared) {
      alert('Kérjük, válassza ki, hogy az ingatlan fel van-e készítve az okosotthon technológiára.');
      return;
    }

    const propertyData = {
      isPrepared: this.isPrepared === 'true',
      rooms: this.rooms,
      windows: this.windows,
      radiators: this.radiators,
      lights: this.lights,
      user: { username: this.username }
    };

    this.propertyService.saveProperty(propertyData).subscribe((response: any) => {
      this.authService.setPropertyId(response.id);
      this.router.navigate(['/smart-devices']);
    });
  }
}
