"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nlp_trainer_1 = require("nlp-trainer");
const nlp_with_actions_1 = require("nlp-with-actions");
class HomoDigitalis {
    constructor() {
        this.processor = new nlp_with_actions_1.Processor();
        this.nlpTrainer = new nlp_trainer_1.NLPTrainer();
    }
    async learn(trainingDataID) {
        const trainingData = await this.nlpTrainer.getIntents(trainingDataID);
        await this.processor.learn(trainingData);
    }
    async answer(input) {
        const answer = await this.processor.process(input);
        return answer;
    }
    async answerWithDetails(input) {
        const answerExtended = await this.processor.processAndDeliverDetails(input);
        return answerExtended;
    }
}
exports.HomoDigitalis = HomoDigitalis;
