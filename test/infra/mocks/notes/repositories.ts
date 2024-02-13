import { CreateNoteRepository } from "../../../../src/application/interfaces/repositories/create-note-repository";
import { makeFakeNote } from "../../../domain/mocks/entities";



export class MockCreateNotesRepository implements CreateNoteRepository{
  async createNote(data: CreateNoteRepository.Request): Promise<CreateNoteRepository.Response> {

    const {id} = await  makeFakeNote()

    return id
  }
  
}