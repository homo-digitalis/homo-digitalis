import { IAnswer, IAnswerExtended } from "nlp-with-actions";
export declare class HomoDigitalis {
    private readonly processor;
    private readonly nlpTrainer;
    constructor();
    learn(trainingDataID: string): Promise<void>;
    respond(input: string): Promise<IAnswer>;
    respondWithDetails(input: string): Promise<IAnswerExtended>;
}
