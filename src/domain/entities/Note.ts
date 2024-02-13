
export type NoteProps={
 id:string,
 userId:string,
 text:string,
 important:boolean
 createdAt: Date;
 updatedAt?: Date;

}



export class Note {

  private id:string
  private userId:string
  private text:string
  private important:boolean

  constructor(props:NoteProps){
    this.id=props.id,
    this.userId=props.userId,
    this.text=props.text,
    this.important=props.important
  }


}