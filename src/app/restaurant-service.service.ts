import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
   providedIn: 'root'
})
export class RestaurantServiceService {

   urldata = "http://localhost:3000/restaurants";
   rootUrl = "http://localhost:3000/";

   constructor(private http: HttpClient) { }

   getList() {
      // console.warn("Some Data......");
      // return "get data here"
      return this.http.get(this.urldata);
   }

   saveData(data: any) {// api created for add new restaurant page(Add restaurant page)
      //console.warn(data)
      return this.http.post(this.urldata, data)
   }

   deleteRestorant(id: any)// delete restaurant api here 
   {
      return this.http.delete(`${this.urldata}/${id}`);
   }


   getCurrentResto(id: any)// Get Current  restaurant api here 
   {
      return this.http.get(`${this.urldata}/${id}`);
   }

   updateCurrentResto(id: any, data: any)// Update Current  restaurant api here 
   {
      return this.http.put(`${this.urldata}/${id}`, data);
   }

   registerUser(data: any) {// this function for Register New User(Register page)
      return this.http.post(this.rootUrl + "users", data)
   }

   loginnewuser(data: any) {// this function for Login page
      return this.http.get(`http://localhost:3000/users?email=${data.email}&password=${data.password}`,{observe:'response'});
   }
}
