import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

export interface Profile {
    id?: string;
    name?: string,
    lastname?: string,
    age?: number,
    currency?: Currency,
    country?: Country,
    city?: string,
    username?: string,
    avatar?: string
}
