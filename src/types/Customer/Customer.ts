import { Email } from '../Email';
import { Model } from '../Model';

export interface UnsavedCustomer {
    firstName: string;
    lastName: string;
    email: Email;
    phone: number;
}

export type Customer = UnsavedCustomer & Model;
