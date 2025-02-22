import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  userInfo: any
  constructor(private authSerive: AuthService, private router: Router) { }
  async googleSignup() {
    this.userInfo = await this.authSerive.googleSignIn();
    console.warn(this.userInfo)
  }
}
