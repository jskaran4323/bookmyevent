export interface CreateEventProps{
    title: string,
    location: string,
}

export interface EventResponseDto{
    id: string,
    title: string,
    location: string,
    date: Date
    createdAt: string
}