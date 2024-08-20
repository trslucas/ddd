import { AnswersRepository } from '@/domain/forum/application/repository/answers-repository'
import { Answer } from '@/domain/forum/enterprise/entities/answer'

export class InMemoryAwnsersRepository implements AnswersRepository {
  public items: Answer[] = []
  async create(answer: Answer) {
    this.items.push(answer)
  }

  async findById(id: string) {
    const answer = this.items.find((item) => item.id.toString() === id)

    if (!answer) {
      throw new Error('Answer not found')
    }

    return answer
  }

  async delete(answer: Answer) {
    const answerToDeleteIndex = this.items.findIndex(
      (item) => item.id === answer.id,
    )

    this.items.splice(answerToDeleteIndex, 1)
  }

  async save(answer: Answer) {
    const answerToEdit = this.items.findIndex((item) => item.id === answer.id)

    this.items[answerToEdit] = answer
  }
}
