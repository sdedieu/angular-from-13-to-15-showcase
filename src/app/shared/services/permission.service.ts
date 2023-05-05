import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor() { }

  isAuthorized(): Observable<boolean> {
    return of(true);
  }
}
