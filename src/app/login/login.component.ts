import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestaurantServiceService } from '../restaurant-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginnew = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  constructor(private loginservice:RestaurantServiceService, private router:Router){}

  ngOnInint(){}

  loginuser(){
   //console.warn(this.loginnew.value);

    this.loginservice.loginnewuser(this.loginnew.value).subscribe((result:any) => {
      console.warn(result);
     // this.loginnew.reset();
     if(result && result.body){
         console.warn("User Logined");
         localStorage.setItem('add',JSON.stringify(result.body[0]));
         this.router.navigate(['add']);
        
     }
     else{
      console.warn("Login Failed")
     }

  });
}
}
