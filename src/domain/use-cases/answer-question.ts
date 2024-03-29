import { Answer } from "../entities/answer"
import { AnswersRepository } from "../repository/answer-repository"

interface AnswerQuestionUseCaseRequest {
  instructorId: string
  questionId: string
  content: string
}


export class AnswerQuestionUseCase {

  constructor(private answersRepository: AnswersRepository ) {}

  async execute({ instructorId, questionId, content}: AnswerQuestionUseCaseRequest) {


  const answer = new Answer({
    authorId: instructorId,
    questionId, 
    content
  })

  await this.answersRepository.create(answer)

  return answer

  }
}