import { Question } from "../models/question";
import { MOCK_QUESTIONS } from "./mocks";


export class APIHelper {

    // dummy implementation of fetch all questions API
    public static fetchAllQuestions() {
        return new Promise<Question[]>((resolve, reject) => {
            setTimeout(() => {
                resolve(MOCK_QUESTIONS);
            }, 3000);
        });
    }

    // dummy implementation to submit answer
    public static submitAnswer(question: Question) {
        if (!question.audioFile) {
            throw new Error("Answer audio is missing");
        }

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    message: "Answer saved successfully",
                    error: null
                })
            }, 3000);
        });
    }

}