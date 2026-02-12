import { Request, Response } from "express";
import { EventService } from "../services/event.service";
import { EventResponseDto } from "../../dtos/event.dto";

export class EventController{

    private eventService = new EventService();
    async registerEvent(req: Request, res: Response):Promise<void>{
        const eventData  = req.body;
        console.log(eventData);
        
        try{
          const event = await this.eventService.createEvent(eventData)  
          res.status(201).json(event)
        } catch(error: unknown){ 
            console.log(error);
            
          res.status(500).json({error: "Failed to create event"})
        }

    }
    //TODO
    //async eventUpdate()
    async getSingleEvent(req: Request, res: Response): Promise<void>{
     const eventId  = req.params.id;
     
     if (!eventId || Array.isArray(eventId)) {
      res.status(400).json({ error: "Invalid event id" });
       return ;
      } 
     try{
        const event = await this.eventService.getEventById(eventId)  
        res.status(200).json(event)
      } catch(error: unknown){ 
        res.status(500).json({error: "Failed to fetch event"})
      }
    }

    async deleteSingleEvent(req: Request, res: Response): Promise<void>{
        const eventId = req.body;
     try{
        await this.eventService.deleteEvent(eventId)  
        res.status(201).json({message: "Event delete successfully"})
      } catch(error: unknown){ 
        res.status(500).json({error: "Failed to delete event"})
      }
    }
}