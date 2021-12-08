import {Injectable}  from "@angular/core";


@Injectable()
export class RentalService {
    
private rentals: any[]=[{
    id: 1,
    title:"Skyline Gateway",
    city:"Cochin",
    street:"Pathadipalam",
    category:"2BHK Apartment",
    image:"https://via.placeholder.com/350x250",
    bedroom:"2",
    description:"Very nice apartment",
    dailyRate:12,
    shared:false,
    createdAt:"23/02/2014"
  },{
    id: 2,
    title:"Hotel Seagate",
    city:"Cochin",
    street:"Edapally",
    category:"Hotel",
    image:"https://via.placeholder.com/350x250",
    bedroom:"2",
    description:"Very nice apartment",
    dailyRate:14,
    shared:true,
    createdAt:"21/05/2019"
  },{
    id: 3,
    title:"Premium Villa",
    city:"Cochin",
    street:"Kaloor",
    category:"2BHK Apartment",
    image:"https://via.placeholder.com/350x250",
    bedroom:"2",
    description:"Very nice Villa",
    dailyRate:20,
    shared:true,
    createdAt:"22/06/2014"
  },{
    id: 4,
    title:"Cochin Heights",
    city:"Cochin",
    street:"Aluva",
    category:"2BHK Apartment",
    image:"https://via.placeholder.com/350x250",
    bedroom:"2",
    description:"Very nice apartment",
    dailyRate:12,
    shared:false,
    createdAt:"14/02/2019"
  }];

  public getRentals(): any[]{
      return this.rentals;
  }

}