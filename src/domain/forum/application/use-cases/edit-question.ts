import { QuestionsRepository } from '../repository/questions-repository'

interface EditQuestionUseCaseRequest {
  title: string
  questionId: string
  content: string
  authorId: string
}

interface EditQuestionUseCaseResponse {}

export class EditQuestionUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({
    questionId,
    title,
    content,
    authorId,
  }: EditQuestionUseCaseRequest): Promise<EditQuestionUseCaseResponse> {
    const question = await this.questionsRepository.findById(questionId)

    if (!question) {
      throw new Error('Question not found')
    }

    if (question.authorId.toString() !== authorId) {
      throw new Error('Not allowed to delete!')
    }

    question.title = title
    question.content = content

    await this.questionsRepository.save(question)

    return {}
  }
}
