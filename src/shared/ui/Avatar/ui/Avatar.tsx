import { CSSProperties, useMemo } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '../../AppImage';
import UserIcon from '../../../assets/icons/user-filled.svg';
import cls from './Avatar.module.scss';
import { Icon } from '../../Icon';
import { Skeleton } from '../../Skeleton';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
    fallbackInverted?: boolean;
}

export const Avatar = ({
    className,
    src,
    size,
    alt,
    fallbackInverted,
}: AvatarProps) => {
    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);

    const fallback = (
        <Skeleton
            width={size}
            height={size}
            border="50%"
        />
    );

    const errorFallback = (
        <Icon
            inverted={fallbackInverted}
            width={size}
            height={size}
            Svg={UserIcon}
        />
    );

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.Avatar, {}, [])}
        />
    );
};
