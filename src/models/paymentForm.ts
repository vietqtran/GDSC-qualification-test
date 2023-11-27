export interface PaymentFormModel {
    firstName: string;
    lastName: string;
    phone: number | null;
    address: string;
    cardName: string;
    cardNumber: number | null;
    expDate: string;
    cvv: number | null;
    numberOfItems: number | null;
    orderTotal: string;
}