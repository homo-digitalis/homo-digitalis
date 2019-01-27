import { IIntent, NLPTrainer } from "nlp-trainer"
import { IAnswer, IAnswerExtended, Processor } from "nlp-with-actions"

export class HomoDigitalis {

    private readonly processor: Processor
    private readonly nlpTrainer: NLPTrainer

    public constructor() {
        this.processor = new Processor()
        this.nlpTrainer = new NLPTrainer()
    }

    public async learn(trainingData: IIntent[]): Promise<void> {
        await this.processor.learn(trainingData)
    }

    public async answer(input: string): Promise<IAnswer> {

        const answer: IAnswer = await this.processor.process(input)

        return answer

    }

    public async answerWithDetails(input: string): Promise<IAnswerExtended> {

        const answerExtended: IAnswerExtended = await this.processor.processAndDeliverDetails(input)

        return answerExtended

    }

}
