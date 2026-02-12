export interface BookingProps{
    id: string,
    userId: string,
    eventId: string,
    createdAt: Date,
    updatedAt: Date
}

export class Bookings{
   private id: string;

   private userId: string;

   private eventId: string;

   private createdAt: Date;
   private updatedAt: Date;

   constructor(props: BookingProps){
    this.id = props.id;
    this.userId = props.userId;
    this.eventId = props.eventId;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
   }


   getId(){
    return this.id
   }

   getUserId(){
    return this.userId
   }

   getEventId(){
    return this.eventId
   }

   getCreatedAt(){
    return this.createdAt
   }

   getUpdatedAt(){
    return this.updatedAt
   }
}
