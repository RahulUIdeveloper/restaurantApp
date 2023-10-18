import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestaurantServiceService } from '../restaurant-service.service'
@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent {
  alert: boolean = false;
  constructor(private restodata: RestaurantServiceService) { }
  addResto = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl('')
  })

  collectResto() {
    console.warn(this.addResto.value);
    this.restodata.saveData(this.addResto.value).subscribe((result) => {
      console.warn(result);
      this.alert = true;
    });
    this.addResto.reset({});// reset form 
  }
  closeAlert() {
    this.alert = false;

  }
}
