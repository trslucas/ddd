import { AnswersRepository } from '../repository/answers-repository'

interface DeleteAnswerUseCaseRequest {
  answerId: string
  authorId: string
}

interface DeleteAnswerUseCaseResponse {}

export class DeleteAnswerUseCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({
    answerId,
    authorId,
  }: DeleteAnswerUseCaseRequest): Promise<DeleteAnswerUseCaseResponse> {
    const answer = await this.answersRepository.findById(answerId)

    if (!answer) {
      throw new Error('Answer not found')
    }

    if (answer.authorId.toString() !== authorId) {
      throw new Error('Not allowed to delete!')
    }
    await this.answersRepository.delete(answer)

    return {}
  }
}
