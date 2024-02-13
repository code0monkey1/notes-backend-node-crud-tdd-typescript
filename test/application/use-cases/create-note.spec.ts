import { CreateNoteRepository } from "../../../src/application/interfaces/repositories/create-note-repository";
import { CreateNoteUseCase } from "../../../src/application/interfaces/use-cases/create-note-use-case";
import { makeFakeNote } from "../../domain/mocks/entities";

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
         const noteRepo:CreateNoteRepository= createMockCreateNoteRepository()

         const sut = createCreateNote(noteRepo)

         const note : CreateNoteUseCase.Request ={
           userId: "",
           text: "",
           important: false
         }

         //act 
         const actual = sut.execute(note)

         //assert
         
         expect(actual).toBe("some_id")
          
 

    })
    
  })
  
  
})

const createCreateNote=(noteRepo:CreateNoteRepository)=>{
     
    return   new CreateNote(noteRepo)
}

const createMockCreateNoteRepository = ():CreateNoteRepository=>{
    
     return {
         async createNote(
    _postData: CreateNoteRepository.Request,
  ): Promise<CreateNoteRepository.Response> {
    const { id } = makeFakeNote()
    return id;
  }
     }
     
}
