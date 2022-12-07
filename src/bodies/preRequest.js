import { checkoutDate, currentDate, randomPrice } from "../util/randomGenerator";

export const totalprice = randomPrice()

export const checkin = currentDate()

export const checkout = checkoutDate()

export const patchBookingBody = {
    depositpaid : true,
    additionalneeds : "Dinner"
}