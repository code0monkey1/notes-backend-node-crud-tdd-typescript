import { CreateNoteRepository } from "../../../src/application/interfaces/repositories/create-note-repository";
import { CreateNoteUseCase } from "../../../src/application/interfaces/use-cases/create-note-use-case";

export class CreateNote implements CreateNoteUseCase{
  constructor(private createPostRepository:CreateNoteRepository){}
  execute(noteData: CreateNoteUseCase.Request): Promise<string> {
     
       return this.createPostRepository.createNote(noteData)
  }
  
}

describe('create-note', () => {


  describe('execute', () => {


    it('is called with notes data',()=>{

         // arrange 
         const noteRepo:CreateNoteRepository= createCreateNoteRepository()

         const sut = createCreateNote(noteRepo)

         const note : CreateNoteUseCase.Request ={
           userId: "",
           text: "",
           important: false
         }

         //act 
         sut.execute(note)

         //assert

        

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
