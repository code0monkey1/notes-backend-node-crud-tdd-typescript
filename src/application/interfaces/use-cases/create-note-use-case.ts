import { Note, NoteProps } from '../../../domain/entities/Note';
import { UseCase } from '../UseCase';

interface CreateNoteUseCase extends 
UseCase<CreateNoteUseCase.Request,CreateNoteUseCase.Response>{
    
      execute(noteData:CreateNoteUseCase.Request):
                        Promise<CreateNoteUseCase.Response>;
}



export namespace CreateNoteUseCase {

  export type Request = Omit<NoteProps,'id'| 'createdAt'|'updatedAt'>

  export type Response = string
   
}