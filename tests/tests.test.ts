import supertest from "supertest";
import server from "../src";
import { client } from "../src/database/prisma";
import { invalidTeacherNameTestFactory, validTestFactory } from "./factory/testFactory";
import { createValidToken } from "./factory/userFactory";

beforeEach(async () => {
    await client.$executeRaw`TRUNCATE TABLE "Tests"`
    await client.$executeRaw`TRUNCATE TABLE "Users"`
});

afterAll(async () => {
    await client.$disconnect();
})

describe("tests for the tests route. Yes, it's weird", () => {
    it("successful test creation", async () => {
        const newTest = validTestFactory();
        const token = await createValidToken();

        const response = await supertest(server)
            .post("/new-test")
            .send(newTest)
            .set("Authorization", `Bearer ${token}`);
        
        expect(response.status).toBe(201);        
    });

    it("test creation with non-existent teacher", async () => {
        const newTest = invalidTeacherNameTestFactory();
        const token = await createValidToken();

        const response = await supertest(server)
            .post("/new-test")
            .send(newTest)
            .set("Authorization", `Bearer ${token}`);
        
        expect(response.status).toBe(404);        
    });

    it("test creation with invalid teacherDiscipline", async () => {
        const newTest = invalidTeacherNameTestFactory();
        const token = await createValidToken();

        const response = await supertest(server)
            .post("/new-test")
            .send(newTest)
            .set("Authorization", `Bearer ${token}`);
        
        expect(response.status).toBe(404);        
    });
})