import cn from 'classnames';
import { FC } from 'react';
import styles from './IconWithNumber.module.scss';

export enum IconWithNumberTheme {
    PRIMARY = 'primary',
}

interface IconWithNumberProps {
    className?: string;
    number?: number;
    theme?: IconWithNumberTheme;
}
export const IconWithNumber:FC<IconWithNumberProps> = (props) => {
    const { className, number = 0, theme = IconWithNumberTheme.PRIMARY } = props;
    return (
        <div className={cn(styles.IconWithNumber, className, styles[theme])}>
            <p className={styles.number}>{number}</p>
        </div>
    );
};
