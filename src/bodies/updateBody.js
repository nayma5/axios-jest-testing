import { additionalneeds, firstname, lastname } from "../util/variables";
import { checkin, checkout, totalprice } from "./preRequest";

export const updateBookingBody = {
    firstname : firstname,
    lastname : lastname,
    totalprice : totalprice,
    depositpaid : true,
    bookingdates :
        {
            checkin : checkin,
            checkout : checkout
        },
    additionalneeds : additionalneeds
}