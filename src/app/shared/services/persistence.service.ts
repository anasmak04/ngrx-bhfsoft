import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {

  set(key : string, data : any) {
    try {
      localStorage.setItem(key, JSON.stringify(data))
    }catch(e) {
      console.error('Error saving to localStorage', e)
    }
  }


  get(key : string)  {
    try {
      const localStorageItem = localStorage.getItem(key)
      return  localStorageItem ? JSON.parse(localStorageItem) : null
    }catch(e) {
      console.error('Error getting data from localStorage', e)
      return null
    }
  }

  

}
