import { AnswersRepository } from '@/domain/forum/application/repository/answers-repository'
import { Answer } from '@/domain/forum/enterprise/entities/answer'

export class InMemoryAwnsersRepository implements AnswersRepository {
  public items: Answer[] = []
  async create(answer: Answer): Promise<void> {
    this.items.push(answer)
  }
}
