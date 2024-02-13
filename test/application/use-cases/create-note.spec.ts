import { CreateNoteRepository } from "../../../src/application/interfaces/repositories/create-note-repository";
import { CreateNoteUseCase } from "../../../src/application/interfaces/use-cases/create-note-use-case";
import { Note, NoteProps } from "../../../src/domain/entities/Note";

export class CreateNote implements CreateNoteUseCase{
  constructor(private createPostRepository:CreateNoteRepository){}
  execute(noteData: CreateNoteUseCase.Request): Promise<string> {
     
       return this.createPostRepository.createNote(noteData)
  }
  
}

describe('create-note', () => {


  describe('execute', () => {


    it('is defined',()=>{

         // arrange 
         const noteRepo:CreateNoteRepository= createCreateNoteRepository()

         const sut = createCreateNote(noteRepo)

         const note : CreateNoteUseCase.Request ={
           userId: "",
           text: "",
           important: false
         }

         const expected:CreateNoteRepository.Response='success'

         //act 
         const actual = sut.execute(note)

         //assert

         expect(actual).toBe(expected)

    })
    
  })
  
  
})

const createCreateNote=(noteRepo:CreateNoteRepository)=>{
     
    return   new CreateNote(noteRepo)
}

const createCreateNoteRepository=()=>{

  

  return {
    
           createNote:jest.fn()
           
         }
}
