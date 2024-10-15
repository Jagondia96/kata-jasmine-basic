import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  public getUser() {
    return { id: 1, name: 'Pepe' };
  }
}
