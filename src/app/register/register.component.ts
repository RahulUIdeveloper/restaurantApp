import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestaurantServiceService } from '../restaurant-service.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
alert:boolean=false;
  constructor(private resgister: RestaurantServiceService) {

  }

  registerNew = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })

  registerNewUser() {
    console.log(this.registerNew.value);
    this.resgister.registerUser(this.registerNew.value).subscribe((result) => {
      console.warn(result);
      this.registerNew.reset();
      this.alert=true;
    })
  }

  closeAlert(){
        this.alert=false;
  }
  ngOnInit() { }


}
