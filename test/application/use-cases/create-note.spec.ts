
import { CreateNote } from '../../../src/application/use-cases/create-note';
import { makeFakeNote } from "../../domain/mocks/entities";
import { MockCreateNotesRepository } from '../../infra/mocks/notes/repositories';


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

      describe('execute', () => {
        
        it('should return the note id , after creation',async()=>{
    
           // arrange 
           const {sut} = makeSut()
  
           const {userId,important,text,id}  = makeFakeNote()
  
           
           const expected =id
  
           //act 
          const actual= await sut.execute({
             userId,
             important,
             text
           })
           
           //assert
           expect(actual).toBe(expected)
              
    
        })
      })

      describe('create-notes-repository', () => {
        
        it('should call create note repository with correct data',async()=>{
    
             // arrange 
             const {createNoteRepositoryStub,sut} = makeSut()
    
             const {userId,important,text}  = makeFakeNote()
    
             const createNotesRepoSpy = jest.spyOn(createNoteRepositoryStub,'createNote')
             
             //act 
             sut.execute({
               userId,
               important,
               text
             })
             
             //assert
             
             expect(createNotesRepoSpy).toHaveBeenCalledWith({
                userId,
                important,
                text
              }) 
    
        })
        
      })
      
    
})

