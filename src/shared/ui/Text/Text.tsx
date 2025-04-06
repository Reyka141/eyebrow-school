import cn from 'classnames';
import { FC } from 'react';
import styles from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    CAPS = 'caps',
    ERROR = 'error',
    CONTRAST = 'contrast',
    RED = 'red',
    BLACK = 'black',
}

export enum TextSize {
    XL = 'xl',
    LG = 'lg',
    MD_LG = 'md-lg',
    MD = 'md',
    MD_CAPS = 'md-caps',
    SM_LG = 'sm-lg',
    SM = 'sm',
    SM_BOLD = 'sm-bold',
    XS_LG = 'xs-lg',
    XS = 'xs',
    XS_BOLD = 'xs-bold',
    XXS = 'xxs',
}

interface TextProps {
    className?: string;
    text?: string;
    theme?: TextTheme;
    size?: TextSize;
}
export const Text: FC<TextProps> = (props) => {
    const { className, text, theme = TextTheme.PRIMARY, size = TextSize.SM } = props;
    return (
        <div className={cn(className, styles[theme])}>
            {text && <p className={cn(styles.text, styles[size])}>{text}</p>}
        </div>
    );
};
