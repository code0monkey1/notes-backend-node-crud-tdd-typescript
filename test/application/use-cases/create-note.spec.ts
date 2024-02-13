import { CreateNoteRepository } from '../../../src/application/interfaces/repositories/create-note-repository';
import { CreateNoteUseCase } from '../../../src/application/interfaces/use-cases/create-note-use-case';
import { makeFakeNote } from "../../domain/mocks/entities";
import { MockCreateNotesRepository } from '../../infra/mocks/notes/repositories';

export class CreateNote implements CreateNoteUseCase{
  constructor(private createNoteRepository:CreateNoteRepository){}
  execute(noteData: CreateNoteUseCase.Request): Promise<string> {
     
       return this.createNoteRepository.createNote(noteData)
  }
  
}


type SutTypes={
  sut:CreateNote,
  createNoteRepositoryStub:MockCreateNotesRepository
}

const makeSut =():SutTypes=>{
   
  const createNoteRepositoryStub = new MockCreateNotesRepository()
  const sut = new CreateNote(createNoteRepositoryStub)

  return {
    sut,
    createNoteRepositoryStub
  }

}

describe('create-note', () => {


    it('should call create note repository with correct data',async()=>{

         // arrange 
  
         const {createNoteRepositoryStub,sut} = makeSut()

         const {userId,important,text}  = makeFakeNote()

          sut.execute({
            userId,
            important,
            text
          })

         //assert
         
         expect(createNoteRepositoryStub.createNote).toHaveBeenCalledWith({
            userId,
            important,
            text
          })
          

    })


    // it('should call create note repository with correct data',async()=>{

    //      // arrange 
    //      const noteRepo:CreateNoteRepository= await createMockCreateNoteRepository()

    //      const sut = createCreateNote(noteRepo)

    //      const note : CreateNoteUseCase.Request ={
    //        userId: "",
    //        text: "",
    //        important: false
    //      }
    //      const {id:expected} = makeFakeNote()

    //      //act 
    //      const actual = await sut.execute(note)

    //      //assert
    //      expect(actual).toBe(expected)
          

    // })
    
    
})

