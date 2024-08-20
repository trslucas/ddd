import { Answer } from '../../enterprise/entities/answer'
import { AnswersRepository } from '../repository/answers-repository'

interface EditAnswerUseCaseRequest {
  answerId: string
  content: string
  authorId: string
}

interface EditAnswerUseCaseResponse {
  answer: Answer
}

export class EditAnswerUseCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({
    answerId,
    content,
    authorId,
  }: EditAnswerUseCaseRequest): Promise<EditAnswerUseCaseResponse> {
    const answer = await this.answersRepository.findById(answerId)

    if (!answer) {
      throw new Error('Question not found')
    }

    if (answer.authorId.toString() !== authorId) {
      throw new Error('Not allowed to delete!')
    }

    answer.content = content

    await this.answersRepository.save(answer)

    return {
      answer,
    }
  }
}
