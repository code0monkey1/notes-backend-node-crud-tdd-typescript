import { CreateNoteRepository } from '../../../src/application/interfaces/repositories/create-note-repository';
import { CreateNoteUseCase } from "../../../src/application/interfaces/use-cases/create-note-use-case";
import { makeFakeNote } from "../../domain/mocks/entities";

export class CreateNote implements CreateNoteUseCase{
  constructor(private createPostRepository:CreateNoteRepository){}
  execute(noteData: CreateNoteUseCase.Request): Promise<string> {
     
       return this.createPostRepository.createNote(noteData)
  }
  
}

class MockCreateNotesRepository implements CreateNoteRepository{
  createNote(data: CreateNoteRepository.Request): Promise<string> {
    throw new Error('Method not implemented.');
  }
  
}

type SutTypes={
  sut:CreateNote,
  createPostRepositoryStub:MockCreateNotesRepository
}

describe('create-note', () => {


    it('should call create note repository with correct data',async()=>{

         // arrange 
         const noteRepo:CreateNoteRepository= {
           createNote:jest.fn()
         }

         const sut = createCreateNote(noteRepo)

         const note : CreateNoteUseCase.Request ={
           userId: "",
           text: "",
           important: false
         }

         //act 
          sut.execute(note)

         //assert
         
         expect(noteRepo.createNote).toHaveBeenCalledWith(note)
          

    })


    it('should call create note repository with correct data',async()=>{

         // arrange 
         const noteRepo:CreateNoteRepository= await createMockCreateNoteRepository()

         const sut = createCreateNote(noteRepo)

         const note : CreateNoteUseCase.Request ={
           userId: "",
           text: "",
           important: false
         }
         const {id:expected} = makeFakeNote()

         //act 
         const actual = await sut.execute(note)

         //assert
         expect(actual).toBe(expected)
          

    })
    
    
})

const createCreateNote=(noteRepo:CreateNoteRepository)=>{
     
    return   new CreateNote(noteRepo)
}

const createMockCreateNoteRepository =async ():Promise<CreateNoteRepository>=>{
    
     return {
         async createNote(
    _postData: CreateNoteRepository.Request,
  ): Promise<CreateNoteRepository.Response> {
    const { id } = makeFakeNote()
    return id;
  }
     }
     
}
