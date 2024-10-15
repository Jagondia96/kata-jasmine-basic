import { UserService } from './user.service';

export class AuthService {

  constructor(private userService: UserService) {}

  public isLoggedIn(): boolean {
    return this.userService.getUser() !== null;
  }
}
