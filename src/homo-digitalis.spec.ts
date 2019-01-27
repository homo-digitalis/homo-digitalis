import { IAnswer, IAnswerExtended } from "nlp-with-actions"
import { HomoDigitalis } from "./homo-digitalis"

describe("HomoDigitalis", () => {

    it("should respond correctly", async () => {

        const homoDigitalis: HomoDigitalis = new HomoDigitalis()

        await homoDigitalis.learn("exampleMap")
        const answer: IAnswer = await homoDigitalis.answer("hi")

        expect(answer.text)
            .toEqual("hey man")

        expect(answer.actions)
            .toEqual(["thumbs up", "thumbs down"])

    })

    it("should respond correctly including details like Entities, Probabilities etc", async () => {

        const homoDigitalis: HomoDigitalis = new HomoDigitalis()
        await homoDigitalis.learn("exampleMap")

        const answerExtended: IAnswerExtended = await homoDigitalis.answerWithDetails("hi")

        expect(answerExtended.text)
            .toEqual("hey man")

        expect(answerExtended.actions)
            .toEqual(["thumbs up", "thumbs down"])

        expect(answerExtended.details)
            .toBeDefined()
    })

})
