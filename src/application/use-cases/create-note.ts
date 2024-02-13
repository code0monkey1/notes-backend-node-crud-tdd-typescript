import { CreateNoteRepository } from "../interfaces/repositories/create-note-repository";
import { CreateNoteUseCase } from "../interfaces/use-cases/create-note-use-case";

export class CreateNote implements CreateNoteUseCase{
  constructor(private createPostRepository:CreateNoteRepository){}
  execute(noteData: CreateNoteUseCase.Request): Promise<string> {
   return this.createPostRepository.createNote(noteData)
  }
  
}