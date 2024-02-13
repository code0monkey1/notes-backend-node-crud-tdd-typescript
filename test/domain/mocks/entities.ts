import { Note } from "../../../src/domain/entities/Note";

export const makeFakeNote = ():Note =>new Note({
  id:'some_id',
  userId:"some_user_id",
  text:"some_text",
  important:true,
  createdAt:new Date(),
  updatedAt:new Date()
})