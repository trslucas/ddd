import { InMemoryAwnsersRepository } from 'test/repository/in-memory-answers-repository'
import { AnswerQuestionUseCase } from './answer-question'
let inMemoryAwnsersRepository: InMemoryAwnsersRepository
let sut: AnswerQuestionUseCase

describe('Create Awnser', () => {
  beforeEach(() => {
    inMemoryAwnsersRepository = new InMemoryAwnsersRepository()
    sut = new AnswerQuestionUseCase(inMemoryAwnsersRepository)
  })

  it('should be able to create an awnser ', async () => {
    const { answer } = await sut.execute({
      instructorId: '2',
      questionId: '1',
      content: 'Nova Pergunta',
    })

    expect(answer.id).toBeTruthy()
    expect(inMemoryAwnsersRepository.items[0].id).toEqual(answer.id)
  })
})
