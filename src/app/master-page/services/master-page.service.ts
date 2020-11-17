import { Injectable } from '@angular/core';
import { HttpService } from '../../shared/http.service';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Filter } from 'src/app/shared/models/filter';

const API_GET_EMPLOYEES = 'api/Employees';

@Injectable({
  providedIn: 'root'
})
export class MasterPageService {

  constructor(private http: HttpService) { }

  getAllEmployees(): Observable<any> {
    return this.http.Get(environment.serviceUrlApiCore + API_GET_EMPLOYEES);
  }

  getById(filter: Filter): Observable<any> {
    return this.http.Post(environment.serviceUrlApiCore + API_GET_EMPLOYEES, filter);
  }
}
