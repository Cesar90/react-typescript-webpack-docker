import { DropdownDirection } from '../../../types/ui';
import cls from './popup.module.scss';

export const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': cls.optionBottonLef,
    'bottom right': cls.optionBottonRight,
    'top right': cls.optionTopRight,
    'top left': cls.optionTopLeft,
};
