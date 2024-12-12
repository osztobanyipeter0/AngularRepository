import { Component, OnInit } from '@angular/core';
import { FeatureService } from '../feature.service';
import { PropertyService } from '../property.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-smart-devices',
  templateUrl: './smart-devices.component.html',
  styleUrls: ['./smart-devices.component.css']
})
export class SmartDevicesComponent implements OnInit {
  devices: any[] = [];
  selectedDevices: any[] = [];
  username: string = '';
  userId: string = '';
  propertyId: string = '';
  hasProperty: boolean = false;

  constructor(
    private featureService: FeatureService,
    private propertyService: PropertyService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.username = this.authService.getUsername();
    this.userId = this.authService.getUserId();
    this.propertyId = this.authService.getPropertyId();
    if (this.userId) {
      this.checkUserProperty();
    }
    this.featureService.getFeatures().subscribe(features => {
      this.devices = features;
    });
  }

  checkUserProperty() {
    this.propertyService.getPropertyByUserId(this.userId).subscribe((property: any) => {
      if (property) {
        this.hasProperty = true;
        this.propertyId = property.id;
        // Töltsd be a már meglévő adatokat, ha vannak
        this.selectedDevices = property.selectedDevices || [];
      }
    });
  }

  toggleDeviceSelection(device: any) {
    if (this.selectedDevices.includes(device)) {
      this.selectedDevices = this.selectedDevices.filter(d => d.id !== device.id);
    } else {
      this.selectedDevices.push(device);
    }
  }

  onSubmit() {
    const selectedFeatures = this.selectedDevices.map(device => ({
      property: { id: this.propertyId },
      feature: { id: device.id },
      quantity: 1
    }));

    this.featureService.saveSelectedFeatures(selectedFeatures).subscribe((response: any) => {
      this.router.navigate(['/result'], { state: { totalCost: 0 } });
    }, (error: any) => {
      console.error('Error saving selected features:', error);
    });
  }
}
