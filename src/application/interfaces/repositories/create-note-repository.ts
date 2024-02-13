import { NoteProps } from '../../../domain/entities/Note';

export interface CreateNoteRepository{
    createNote(data:CreateNoteRepository.Request):
                Promise<CreateNoteRepository.Response>
}


export namespace CreateNoteRepository{
 export type  Request= Omit<NoteProps,'id'|'updatedAt'|'createdAt'>
 export type  Response = string
}