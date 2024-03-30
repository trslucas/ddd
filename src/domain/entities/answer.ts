import { randomUUID } from "node:crypto"
import { Entity } from "../../core/entities/entity"
import { get } from "node:http"

interface AnswerProps {
  content: string
  questionId: string
  authorId: string
}

export class Answer extends Entity<AnswerProps> {
 
  get content() {
    return this.props.content
  }
}