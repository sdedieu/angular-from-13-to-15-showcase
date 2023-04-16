import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getItem<T>(key: string): T | undefined {
    const stored = localStorage.getItem(key);
    const value = stored ? JSON.parse(stored) as T : undefined;
    return value;
  }

  setItem<T>(key: string, value: T): void {
    const stringified = JSON.stringify(value);
    localStorage.setItem(key, stringified);
  }
}
