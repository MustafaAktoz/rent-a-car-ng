import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  add(key:string,value:string)
  {
    localStorage.setItem(key,value);
  }

  delete(key:string)
  {
    localStorage.removeItem(key);
  }

  get(key:string)
  {
    try{
      return localStorage.getItem(key)
    }
    catch{
      return undefined
    }
    
  }
}
