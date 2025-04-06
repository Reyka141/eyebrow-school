import cn from 'classnames';
import { FC } from 'react';
import styles from './HeaderText.module.scss';

interface HeaderTextProps {
    className?: string;
    title: string;
    subtitle?: string;
}

export const HeaderText: FC<HeaderTextProps> = (props) => {
    const { className, title, subtitle } = props;
    return (
        <div className={cn(styles.HeaderText, className)}>
            <h2 className={styles.title}>{title}</h2>
            {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
        </div>
    );
};
