import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  private apiUrl = 'http://localhost:8080/api/features';
  private selectedFeaturesUrl = 'http://localhost:8080/api/selected-features';

  constructor(private http: HttpClient) { }

  getFeatures(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get(`${this.apiUrl}`, { headers });
  }

  saveSelectedFeatures(selectedFeatures: any[]): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(`${this.selectedFeaturesUrl}`, selectedFeatures, { headers });
  }
}
