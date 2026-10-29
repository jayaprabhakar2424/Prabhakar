import{test,expect} from '@playwright/test';
test('GET METHOD',async({request})=>{
   const get= await request.get("https://restful-booker.herokuapp.com/booking");
   console.log(get);
   const java = await get.json();
   console.log(java);
   expect(get.status()).toEqual(200);
   expect(get.ok()).toBeTruthy();
})