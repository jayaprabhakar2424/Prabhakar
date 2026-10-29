import{test,expect} from '@playwright/test';
test("putmethod",async({request})=>{
    const postResponse=await request.post("https://restful-booker.herokuapp.com/booking",{headers:{"Content-Type": "application/json"},data:{
    "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
},
})

const postbody  =await postResponse.json();
const bookingid =await postbody.bookingid;
console.log(bookingid);

const authResponse =await request.post("https://restful-booker.herokuapp.com/auth",{headers:"Content-Type: application/json",
    data:{"username" : "admin",
    "password" : "password123"
    },
},
)
const postauth =await authResponse.json();
const token =await postauth.token;
const putmethod =await request.put(`https://restful-booker.herokuapp.com/booking/${bookingid}`,{headers:{"Content-Type":"application/json",
   Accept: "application/json",
   Cookie: `token=${token}`,
},
data:{
    firstname : "James",
    lastname : "Brown",
    totalprice : 111,
    depositpaid : true,
    bookingdates : {
        checkin : "2018-01-01",
        checkout : "2019-01-01"
     },
    "additionalneeds" : "Breakfast"
    },
},
) 
const putbody =await putmethod.json();
console.log(putbody);
})