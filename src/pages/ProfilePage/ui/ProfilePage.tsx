import { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    ProfileCard,
    ValidateProfileError,
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidateErrors,
    profileActions,
    profileReducer,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from 'shared/ui/Page';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErros = useSelector(getProfileValidateErrors);
    const { id } = useParams<{ id: string }>();

    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t(''),
        [ValidateProfileError.INCORRECT_COUNTRY]: t(''),
        [ValidateProfileError.NOT_DATA]: t(''),
        [ValidateProfileError.INCORRECT_USER_DATA]: t(''),
        [ValidateProfileError.INCORRECT_AGE]: t(''),
    };

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    // useEffect(() => {
    //     if (__PROJECT__ !== 'storybook') {
    //         dispatch(fetchProfileData());
    //     }
    // }, [dispatch]);

    const onChangeFirstname = useCallback((value?
        : string) => {
        dispatch(profileActions.updateProfile({ name: value || '' }));
    }, [dispatch]);

    const onChangeLastname = useCallback((value?
        : string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }));
    }, [dispatch]);

    const onChangeAge = useCallback((value?
        : string) => {
        dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
    }, [dispatch]);

    const onChangeCity = useCallback((value?
        : string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);

    const onChangeUsername = useCallback((value?
        : string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value?
        : string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((currency
        : Currency) => {
        dispatch(profileActions.updateProfile({ currency }));
    }, [dispatch]);

    const onChangeCountry = useCallback((country
        : Country) => {
        dispatch(profileActions.updateProfile({ country }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page>
                <ProfilePageHeader />
                {validateErros?.length && validateErros.map((err) => (
                    <Text
                        key={err}
                        theme={TextTheme.ERROR}
                        text={err}
                    />
                ))}
                <ProfileCard
                    data={formData}
                    error={error}
                    readonly={readonly}
                    isLoading={isLoading}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
