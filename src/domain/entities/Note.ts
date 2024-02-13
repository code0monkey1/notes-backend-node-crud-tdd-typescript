
export type NoteProps={
 id:string,
 userId:string,
 text:string,
 important:boolean
 createdAt: Date;
 updatedAt?: Date;

}



export class Note {

  public readonly id:string
  public readonly userId:string
  public readonly text:string
  public readonly important:boolean

  constructor(props:NoteProps){
    this.id=props.id,
    this.userId=props.userId,
    this.text=props.text,
    this.important=props.important
  }


}