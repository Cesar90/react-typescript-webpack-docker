import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { Text } from 'shared/ui/Text';
import { Input } from 'shared/ui/Input';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './Profile.module.scss';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Firstname')} />
                <Button
                    className={cls.editBtn}
                    theme={ThemeButton.OUTLINE}
                >
                    {t('Edit Profile')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={data?.name}
                    placeholder={t('First Name')}
                    className={cls.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Last Name')}
                    className={cls.input}
                />
            </div>
        </div>
    );
};
