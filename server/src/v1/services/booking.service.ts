import { BookingResponseDto } from "../../dtos/booking.dto";
import { prisma } from "../../prisma/prismaClient";

export class BookingService{

    private toBookingResponse(booking: any): BookingResponseDto{
        return {
            id: booking.id.toString(),
            userId: booking.userId,
            event: booking.eventId,
            createdAt: booking.createdAt,
            updatedAt: booking.updatedAt
        }
    }


    async createBooking(userId: string, eventId: string): Promise<BookingResponseDto>{
           const booking = await prisma.booking.create({data: {
              userId: userId,
              eventId: eventId,
           }})
        return this.toBookingResponse(booking)
    }
    async updatedBooking(){

    }
    async getBooking(userId: string){
      const booking = await prisma.booking.findUnique({
        where: {
            id: userId
        }
      })

      return this.toBookingResponse(booking)
    }

    async deleteBooking(bookingId: string){
      await prisma.booking.delete({
        where: {
            id: bookingId
        }
      })
    }

}