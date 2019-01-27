"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const homo_digitalis_1 = require("./homo-digitalis");
describe("HomoDigitalis", () => {
    it("should respond correctly", async () => {
        const homoDigitalis = new homo_digitalis_1.HomoDigitalis();
        await homoDigitalis.learn("exampleMap");
        const answer = await homoDigitalis.respond("hi");
        expect(answer.text)
            .toEqual("hey man");
        expect(answer.actions)
            .toEqual(["thumbs up", "thumbs down"]);
    });
    it("should respond correctly including details like Entities, Probabilities etc", async () => {
        const homoDigitalis = new homo_digitalis_1.HomoDigitalis();
        await homoDigitalis.learn("exampleMap");
        const answerExtended = await homoDigitalis.respondWithDetails("hi");
        expect(answerExtended.text)
            .toEqual("hey man");
        expect(answerExtended.actions)
            .toEqual(["thumbs up", "thumbs down"]);
        expect(answerExtended.details)
            .toBeDefined();
    });
});
