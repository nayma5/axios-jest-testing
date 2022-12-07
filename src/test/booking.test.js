import { authBody } from "../bodies/authBody";
import { createBookingBody } from "../bodies/bookingBody";
import { checkin } from "../bodies/preRequest";
import { updateBookingBody } from "../bodies/updateBody";
import { auth } from "../httpMethods/auth";
import { createBooking } from "../httpMethods/createBooking";
import { getuser } from "../httpMethods/getUser";
import { updateBooking, updateBookingInfo } from "../httpMethods/updateBooking";
import { content } from "../util/variables";
import {getBookingInfo} from "../httpMethods/getBookingInfo";
import { patchBookingBody } from "../bodies/preRequest";
import { patchBookingInfo } from "../httpMethods/patchBooking";
import { deleteBooking } from "../httpMethods/deleteBooking";


export let bookingId
export let token   
// 5b820b6d4e53726

describe("Authentication", () => {
    let response;

    beforeAll(async () => {
        response = await auth(
            authBody,
            content
        );
        token = response.data.token;
        // console.log("response is:", response.data);
    });

    afterAll( () =>{
        content.headers.Cookie = `token= ${token}`
        // console.log("token: ", response.data.token)
    });

    test("status code is 200", async () => {
        await expect(response.status).toEqual(200);
    });

    test("status text is OK", async () =>{
        await expect(response.statusText).toEqual("OK")
    }); 
})

describe("Create user booking", () => {
    let response;

    beforeAll(async () => {
        response = await createBooking(createBookingBody,content);
    })

    afterAll(async () =>{
        bookingId = response.data.bookingid;
        console.log("created booking id:",bookingId)
    })


    test("status code is 200", async() => {
        await expect(response.status).toEqual(200)
    });

    test("status text is OK", async () =>{
        await expect(response.statusText).toEqual("OK")
    });

    test("first name is equal expected value", async () => {
        await expect(response.data.booking.firstname).toEqual(createBookingBody.firstname);
    });

    test("last name is equal expected value", async () => {
        await expect(response.data.booking.lastname).toEqual(createBookingBody.lastname);
    });

    test("price in response is equal generated value", async () => {
        await expect(response.data.booking.totalprice).toEqual(createBookingBody.totalprice);
    });

    test("depositPaid in response is equal generated value", async () => {
        await expect(response.data.booking.depositpaid).toEqual(createBookingBody.depositpaid);
    });

    test("checkin date is equal expected value", async () => {
        await expect(response.data.booking.bookingdates.checkin).toEqual(createBookingBody.bookingdates.checkin);
    });

    test("checkout date is equal expected value", async () => {
        await expect(response.data.booking.bookingdates.checkout).toEqual(createBookingBody.bookingdates.checkout);
    });

    test("additional needs in response is equal generated value", async () => {
        await expect(response.data.booking.additionalneeds).toEqual(createBookingBody.additionalneeds);
    });
})

describe("Get all bookingsIds", () => {
    let response;

    beforeAll(async () => {
        response = await getuser(content);
    })

    test("status code is 200", async() => {
        await expect(response.status).toEqual(200)
    });

    test("status text is OK", async () =>{
        await expect(response.statusText).toEqual("OK")
    });
});



describe("Get info about user booking via id", () => {
    let response;

    beforeAll(async () => {
        response = await getBookingInfo(bookingId, content);
    });

    test("status code is 200", async() => {
        await expect(response.status).toEqual(200)
    });

    test("status text is OK", async () =>{
        await expect(response.statusText).toEqual("OK")
    });

    test("first name is equal expected value", async () => {
        await expect(response.data.firstname).toEqual(createBookingBody.firstname);
    });

    test("last name is equal expected value", async () => {
        await expect(response.data.lastname).toEqual(createBookingBody.lastname);
    });

    test("price in response is equal generated value", async () => {
        await expect(response.data.totalprice).toEqual(createBookingBody.totalprice);
    });

    test("depositPaid in response is equal generated value", async () => {
        await expect(response.data.depositpaid).toEqual(createBookingBody.depositpaid);
    });

    test("checkin date is equal expected value", async () => {
        await expect(response.data.bookingdates.checkin).toEqual(createBookingBody.bookingdates.checkin);
    });

    test("checkout date is equal expected value", async () => {
        await expect(response.data.bookingdates.checkout).toEqual(createBookingBody.bookingdates.checkout);
    });

    test("additional needs in response is equal generated value", async () => {
        await expect(response.data.additionalneeds).toEqual(createBookingBody.additionalneeds);
    });
});


describe("Update booking info", () => {
    let response
    beforeAll(async () => {

        response = await updateBookingInfo(createBookingBody,content,bookingId);

    });

    test("status code is 200", async() => {
        await expect(response.status).toEqual(200)
    });

    test("status text is OK", async () =>{
        await expect(response.statusText).toEqual("OK")
    });

    
    test("first name is equal expected value", async () => {
        await expect(response.data.firstname).toEqual(createBookingBody.firstname);
    });

    test("last name is equal expected value", async () => {
        await expect(response.data.lastname).toEqual(createBookingBody.lastname);
    });

    test("price in response is equal generated value", async () => {
        await expect(response.data.totalprice).toEqual(createBookingBody.totalprice);
    });

    test("depositPaid in response is equal generated value", async () => {
        await expect(response.data.depositpaid).toEqual(createBookingBody.depositpaid);
    });

    test("checkin date is equal expected value", async () => {
        await expect(response.data.bookingdates.checkin).toEqual(createBookingBody.bookingdates.checkin);
    });

    test("checkout date is equal expected value", async () => {
        await expect(response.data.bookingdates.checkout).toEqual(createBookingBody.bookingdates.checkout);
    });

    test("additional needs in response is equal generated value", async () => {
        await expect(response.data.additionalneeds).toEqual(createBookingBody.additionalneeds);
    });

});



describe("Update the part of info via patch", () => {
    let response;

    beforeAll(async () => {
        response = await patchBookingInfo(patchBookingBody,content,bookingId)
    });

    test("status code is 200", async() => {
        await expect(response.status).toEqual(200)
    });

    test("status text is OK", async () =>{
        await expect(response.statusText).toEqual("OK")
    });

    test("depositPaid in response is equal generated value", async () => {
        await expect(response.data.depositpaid).toEqual(patchBookingBody.depositpaid);
    });

    test("additional needs in response is equal generated value", async () => {
        await expect(response.data.additionalneeds).toEqual(patchBookingBody.additionalneeds);
    });
});


describe("Delete user booking", () => {
    let response;
    beforeAll(async () => {
        response = await deleteBooking(content,bookingId);
    });

    test("status code is 201", async() => {
        await expect(response.status).toEqual(201)
    });

    test("status text is Created", async () =>{
        await expect(response.statusText).toEqual("Created")
    });
});

describe("Try to get info about deleted booking", () => {
    let status;
    let statusText;
    beforeAll(async () => {
        try{
            response = await getBookingInfo(bookingId, content);
        } catch (error) {
            status = error.response.status;
            statusText = error.response.statusText;
        }
        console.log("deleted booking id:",bookingId)
    });

    test("status code is 404", async() => {
        await expect(status).toEqual(404)
    });

    test("status text is Not Found", async () =>{
        await expect(statusText).toEqual("Not Found")
    });
});




