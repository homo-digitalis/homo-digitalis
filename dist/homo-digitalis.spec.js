"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const homo_digitalis_curricula_service_1 = require("homo-digitalis-curricula-service");
const homo_digitalis_1 = require("./homo-digitalis");
describe("HomoDigitalis", () => {
    it("should respond correctly", async () => {
        const homoDigitalis = new homo_digitalis_1.HomoDigitalis();
        const curriculaService = new homo_digitalis_curricula_service_1.CurriculaService();
        const curriculumContent = await curriculaService.provideCurriculumByID("exampleMap");
        await homoDigitalis.learn(curriculumContent);
        const answer = await homoDigitalis.answer("hi");
        expect(answer.text)
            .toEqual("hey man");
        expect(answer.actions)
            .toEqual(["thumbs up", "thumbs down"]);
    });
    it("should respond correctly including details like Entities, Probabilities etc", async () => {
        const homoDigitalis = new homo_digitalis_1.HomoDigitalis();
        const curriculaService = new homo_digitalis_curricula_service_1.CurriculaService();
        const curriculumContent = await curriculaService.provideCurriculumByID("exampleMap");
        await homoDigitalis.learn(curriculumContent);
        const answerExtended = await homoDigitalis.answerWithDetails("hi");
        expect(answerExtended.text)
            .toEqual("hey man");
        expect(answerExtended.actions)
            .toEqual(["thumbs up", "thumbs down"]);
        expect(answerExtended.details)
            .toBeDefined();
    });
});
