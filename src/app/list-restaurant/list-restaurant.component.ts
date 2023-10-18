import { Component, OnInit } from '@angular/core';
import { RestaurantServiceService } from "../restaurant-service.service"
@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.css']
})
export class ListRestaurantComponent implements OnInit {

  dataItem: any = [];
  constructor(private restoData: RestaurantServiceService) { }

  ngOnInit(): void {
    this.restoData.getList().subscribe((result) => {
      console.warn(result);
      this.dataItem = result;
    });
  }

  deleteResto(item: any) {
    
    //console.warn("I got id here = " + item);
    console.warn(this.dataItem);
    this.dataItem.splice(item-1,1)
    this.restoData.deleteRestorant(item).subscribe((result)=>{
      console.warn(result);
    })
  }

}
