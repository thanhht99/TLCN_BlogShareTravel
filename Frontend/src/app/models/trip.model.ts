import {Tour} from './tour.model';
import {TourGuide} from './tour-guide.model';

export class Trip {
    id: Number;
    infoHotel: String;
    infoVehicle: String;
    startDate: String;
    endDate: String;
    price: String;
    childrenPrice: String;
    babyPrice: String; 
    amount: Number;   
    theRemainingAmount: Number;   
    isStatus: Boolean
    tourId: Number;
    tourGuideId: Number;    
    Tour: Tour;
    TourGuide: TourGuide;
}