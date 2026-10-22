import { test, expect } from '@playwright/test';

test.describe("API Tests", () => {
    test.describe.configure({ mode: 'serial'});
    var userId: string;

    test("Get users", async ({request}) => {
        const response = await request.get("https://reqres.in/api/users?page=2");
        console.log(await response.json());
        expect(response.status()).toBe(200);
    })

    test("Create user", async ({request}) => {
        const response = await request.post("https://reqres.in/api/users", {
            data: {
                'name': "Nawal",
                'job': "QA"
            },
            headers: {
                'Accept': 'application/json'
            },
        });
        console.log(await response.json());
        expect(response.status()).toBe(201);
        var res = await response.json();
        userId = res.id;
    });

    test("Update user", async ({request}) => {
        const response = await request.put(`https://reqres.in/api/users/${userId}`, {
            data:{
                'name' : "Nawal",
                'job' : 'QA Engineer'
            },
            headers: {
                'Accept': 'application/json'
            }
        });
        console.log(await response.json());
        expect(response.status()).toBe(200);
    });

    test("Delete user", async ({request}) => {
        const response = await request.delete("https://reqres.in/api/users/"+ userId);
        expect(response.status()).toBe(204);
    });
});