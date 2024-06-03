import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Moment } from '../Moments';

import { environment_production } from '../../environments/environment_production';
@Injectable({
  providedIn: 'root',
})
export class MomentService {
  private baseApiUrl = environment_production.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/moments`;

  constructor(private http: HttpClient) { }
  
  createMoment(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, FormData);
  }
}