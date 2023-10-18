import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestaurantServiceService } from '../restaurant-service.service'
@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent {
alert:boolean=false;
  editRestoForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl('')
  })

  constructor(private paramsrouter: ActivatedRoute, private currentResto: RestaurantServiceService) { }

  ngOnInit(): void {
    console.warn(this.paramsrouter.snapshot.params['id'])
    this.currentResto.getCurrentResto(this.paramsrouter.snapshot.params['id']).subscribe((result: any) => {
      console.warn(result);

      this.editRestoForm = new FormGroup({
        name: new FormControl(result['name']),
        address: new FormControl(result['address']),
        email: new FormControl(result['email'])
      })

    })
  }

  updateCollection() {
    console.warn("Item", this.editRestoForm.value);
    this.currentResto.updateCurrentResto(this.paramsrouter.snapshot.params['id'], this.editRestoForm.value).subscribe((result)=>{
     
      console.log(result);
      this.alert=true;

    })
  }
  closeAlert(){
    this.alert=false;
  }
}
