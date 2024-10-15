import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class SecretService {

  public getSecret(num: number): number {
    return this.calculateSecret(num);
  }

  private calculateSecret(num: number): number {
    return num * 3;
  }
}
