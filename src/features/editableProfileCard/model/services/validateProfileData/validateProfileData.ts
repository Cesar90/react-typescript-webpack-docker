import { Profile } from '@/entities/Profile';
import { ValidateProfileError } from '../../consts/consts';

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileError.NOT_DATA];
    }

    const {
        name, lastname, age, country,
    } = profile;
    const error: ValidateProfileError[] = [];

    if (!name || !lastname) {
        error.push(ValidateProfileError.INCORRECT_USER_DATA);
    }

    if (!age || !Number.isInteger(age)) {
        error.push(ValidateProfileError.INCORRECT_AGE);
    }

    if (!country) {
        error.push(ValidateProfileError.INCORRECT_COUNTRY);
    }

    return error;
};
