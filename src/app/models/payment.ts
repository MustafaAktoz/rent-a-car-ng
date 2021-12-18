export interface Payment {
    id: number
    userId: number
    cardHolderName: string
    cardNumber: string
    year: number
    month: number
    cvv: number
}