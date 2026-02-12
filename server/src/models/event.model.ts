export interface EventProps{
    id: string,
    title: string,
    location: string,
    date: Date,
    createdAt: Date,
    updatedAt: Date
}

export class Event{
   private id: string;

   private title: string;

   private location: string;

   private date: Date;

   private createdAt: Date;
   private updatedAt: Date;

   constructor(props: EventProps){
    this.id = props.id;
    this.title = props.title;
    this.location = props.location;
    this.date = props.date;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
   }


   getId(){
    return this.id
   }

   getTitle(){
    return this.title
   }

   getLocation(){
    return this.location
   }

   getDate(){
    return this.date
   }

   getCreatedAt(){
    return this.createdAt
   }

   getUpdatedAt(){
    return this.updatedAt
   }
}
