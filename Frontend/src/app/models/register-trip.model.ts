import { Account } from "./account.model";
import {Trip} from './trip.model';

export class RegisterTrip {
    id: String;
    nameRegister: String;
    email: String;
    gender: String;
    identity: String;
    phone: String;
    address: String;
    adults: Number;
    children: Number;
    baby: Number;
    totalMoney: String;
    maTour: Number;
    tripId: Number;
    accountId: Number;
    Trip: Trip;  
    Account: Account;
}