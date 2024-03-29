import { expect, test } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'
import { AnswersRepository } from '../repository/answer-repository'
import { Answer } from '../entities/answer'


const fakeAnswersRepository: AnswersRepository = {
  create: async(answer: Answer) => {
    return
  } 
}

test('create a answer', async ()=> {
  const answerQuestionUseCase = new AnswerQuestionUseCase(fakeAnswersRepository)

const answer = await answerQuestionUseCase.execute({
  content: 'Nova resposta',
  instructorId: '1',
  questionId: '2'
})

expect(answer.content).toEqual('Nova resposta')
})