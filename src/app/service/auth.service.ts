import { Injectable } from '@angular/core';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { Platform } from '@ionic/angular';
import { isPlatform } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  googleUser: any;

  constructor(private platform:Platform) {
    if(!isPlatform){
      GoogleAuth.initialize()
    }
    this.platform.ready().then(()=>{
      GoogleAuth.initialize()
    })
   }
   
   async googleSignIn() {
    this.googleUser = await GoogleAuth.signIn();
   return await this.googleUser
  }
}
