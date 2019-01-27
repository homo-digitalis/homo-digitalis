import { NLPTrainer } from "nlp-trainer"
import { IAnswer, IAnswerExtended, Processor } from "nlp-with-actions"

export class HomoDigitalis {

    private readonly processor: Processor
    private readonly nlpTrainer: NLPTrainer

    public constructor() {
        this.processor = new Processor()
        this.nlpTrainer = new NLPTrainer()
    }

    public async learn(trainingDataID: string): Promise<void> {
        const trainingData: any = await this.nlpTrainer.getIntents(trainingDataID)
        await this.processor.learn(trainingData)
    }

    public async respond(input: string): Promise<IAnswer> {

        const answer: IAnswer = await this.processor.process(input)

        return answer

    }

    public async respondWithDetails(input: string): Promise<IAnswerExtended> {

        const answerExtended: IAnswerExtended = await this.processor.processAndDeliverDetails(input)

        return answerExtended

    }

}