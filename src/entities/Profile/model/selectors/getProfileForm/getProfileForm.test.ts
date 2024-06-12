import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    test('should work with filled state', () => {
        const data = {
            username: 'admin',
            age: 22,
            country: Country.Nicaragua,
            lastname: 'Cordero',
            name: 'Cesar',
            city: 'Managua',
            currency: Currency.USD,
        };

        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
        };
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
