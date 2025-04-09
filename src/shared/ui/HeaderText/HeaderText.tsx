import cn from 'classnames';
import { FC } from 'react';
import styles from './HeaderText.module.scss';

export enum HeaderTextTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    TERTIARY = 'tertiary',
}

interface HeaderTextProps {
    className?: string;
    title: string;
    subtitle?: string;
    theme?: HeaderTextTheme;
}

export const HeaderText: FC<HeaderTextProps> = (props) => {
    const { className, title, subtitle, theme = HeaderTextTheme.PRIMARY } = props;
    return (
        <div className={cn(styles.HeaderText, className, styles[theme])}>
            <h2 className={styles.title}>{title}</h2>
            {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
        </div>
    );
};
