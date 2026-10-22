import { test, expect } from '@playwright/test';

test.only("Get users", async ({request}) => {
    const response = await request.get("https://reqres.in/api/users?page=2");
    console.log(await response.json());
    expect(response.status()).toBe(200);
})

test("Create user", async ({request}) => {
    
});

test("Update users", async ({request}) => {
    
});

test("Delete user", async ({request}) => {
    
}); 