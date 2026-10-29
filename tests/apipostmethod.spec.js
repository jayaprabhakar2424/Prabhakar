import{test,expect} from '@playwright/test';
test('post method',async({request})=> {
    const postResponse = await request.post("https://restful-booker.herokuapp.com/booking");
    {
         headers: 'Content-Type: application/json', 
   {
    firstname : "Jim",
    lastname : "Brown",
    totalprice : 111,
    depositpaid : true,
    bookingdates : {
        checkin : "2018-01-01",
        checkout : "2019-01-01"
    },
    additionalneeds : "Breakfast"
}
    }  
const jaya = await postResponse.json();
console.log(jaya);
expect(postResponse.status()).toEqual(200);
expect(postResponse.ok()).toBeTruthy();
})
