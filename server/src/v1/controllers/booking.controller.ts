import { AuthenticatedRequest } from "../../dtos/express";
import { BookingService } from "../services/booking.service";
import { Request, Response } from "express";


export class BookingController{
    private bookingService = new BookingService();

    async registerBooking(req: AuthenticatedRequest, res: Response):Promise<void>{
            const eventId  = req.body.id;
            const userId = req.user?.id;
            if(!userId){
              res.status(201).json({message: "user_id is null"})
              return
            }
            try{
              const event = await this.bookingService.createBooking(userId, eventId)  
              res.status(201).json(event)
            } catch(error: unknown){ 
              res.status(500).json({error: "Failed to create booking"})
            }
        }
        //TODO
        //async eventUpdate()
        async getSingleBooking(req: Request, res: Response){
         const bookingId = req.params.id;
         if (!bookingId || Array.isArray(bookingId)) {
          res.status(400).json({ error: "Invalid event id" });
           return ;
          } 
         try{
            const booking = await this.bookingService.getBooking(bookingId)  
            res.status(201).json(booking)
          } catch(error: unknown){ 
            res.status(500).json({error: "Failed to fetch booking"})
          }
        }
    
        async deleteSingleBooking(req: Request, res: Response){
            const bookingId = req.body;
         try{
            await this.bookingService.deleteBooking(bookingId)  
            res.status(201).json({message: "booking deleted successfully"})
          } catch(error: unknown){ 
            res.status(500).json({error: "Failed to delete booking"})
          }
        }
}