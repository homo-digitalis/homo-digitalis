import { IAnswer, IAnswerExtended } from "nlp-with-actions";
export declare class HomoDigitalis {
    private readonly processor;
    private readonly nlpTrainer;
    constructor();
    learn(trainingDataID: string): Promise<void>;
    answer(input: string): Promise<IAnswer>;
    answerWithDetails(input: string): Promise<IAnswerExtended>;
}
