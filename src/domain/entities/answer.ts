import { randomUUID } from "node:crypto"

interface AnswerProps {
  content: string
  questionId: string
  authorId: string
}

export class Answer {
  public id: string
  public content: string
  public questionId: string
  public authorId: string

  constructor(props: AnswerProps, id?: string) {
    this.id = id ?? randomUUID()
    this.content = props.content
    this.authorId = props.authorId
    this.questionId = props.questionId
  }
}