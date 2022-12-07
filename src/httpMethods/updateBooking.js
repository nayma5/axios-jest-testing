import axios from "axios";
import { endpoint } from "../util/variables";



export async function updateBookingInfo(body, headers, bookingid){

    return await axios.put(`https://restful-booker.herokuapp.com/booking/2771`, body, headers)
}

