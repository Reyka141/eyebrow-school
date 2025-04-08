import ArrowDown from '@/shared/assets/icons/arrow_down_v2.svg?react';
import { Text, TextSize, TextWeight } from '@/shared/ui/Text/Text';
import cn from 'classnames';
import { FC } from 'react';
import styles from './MoreInfo.module.scss';
interface MoreInfoProps {
    className?: string;
}
export const MoreInfo: FC<MoreInfoProps> = (props) => {
    const { className } = props;
    return (
        <div className={cn(styles.MoreInfo, className)}>
            <Text size={TextSize.XXS} weight={TextWeight.LIGHT} text="Для більш детальної інформації гортай вниз" />
            <ArrowDown />
        </div>
    );
};
