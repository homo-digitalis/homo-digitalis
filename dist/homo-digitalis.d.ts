import { IIntent } from "nlp-trainer";
import { IAnswer, IAnswerExtended } from "nlp-with-actions";
export declare class HomoDigitalis {
    private readonly processor;
    private readonly nlpTrainer;
    constructor();
    learn(trainingData: IIntent[]): Promise<void>;
    answer(input: string): Promise<IAnswer>;
    answerWithDetails(input: string): Promise<IAnswerExtended>;
}
