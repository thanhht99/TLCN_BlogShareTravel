import { TourGuide } from "./tour-guide.model";
import { Customer } from "./customer.model";


export class Account {
    id: Number;
    fullname: String;
    email: String;
    username: String;
    password: String;
    confirmpassword: String; 
    //accountType: String;   
    isTourGuide: Boolean;
    isCustomer: Boolean;
    Customer: Customer;
    TourGuide: TourGuide;
}