import { CreateEventProps, EventResponseDto } from "../../dtos/event.dto";
import { Event } from "../../models/event.model";
import { prisma } from "../../prisma/prismaClient";





export class EventService{
 
    private toEventResponse(event: any): EventResponseDto{
         return {
            id: event.id.toString(),
            title: event.title,
            location: event.location,
            date: event.date,
            createdAt: event.createdAt
         } 
    }

    async createEvent(eventData: CreateEventProps): Promise<EventResponseDto>{
      
        const event = await prisma.event.create({data: {
            title: eventData.title,
            location: eventData.location,
            date: new Date(Number("1770918984882"))
        }})
        
        return this.toEventResponse(event)

    }
    //TODO
    async updateEvent(){

    }
    async getEventById(eventId: string){
     const event = await prisma.event.findUnique({
        where:{
            id: eventId
        }
     })
     if(!event){
        return "event not found"
     }
     return this.toEventResponse(event)
    }

    async deleteEvent(eventId: string){
      await prisma.event.delete({
        where:{
            id: eventId
        }
      })
     
      return "Event deleted"

    }

}