import cn from 'classnames';
import { FC } from 'react';
import styles from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
}

export enum TextSize {
    XL = 'xl',
    LG = 'lg',
    MD_LG = 'md-lg',
    MD_LG_SECONDARY = 'md-lg-secondary',
    MD = 'md',
    MD_CAPS = 'md-caps',
    SM_LG = 'sm-lg',
    SM = 'sm',
    SM_BOLD = 'sm-bold',
    XS_LG = 'xs-lg',
    XS = 'xs',
    XS_BOLD = 'xs-bold',
    XXS = 'xxs',
    TINY = 'tiny',
    MICRO = 'micro',
}

export enum TextWeight {
    EXTRALIGHT = 'extralight',
    LIGHT = 'light',
    REGULAR = 'regular',
    MEDIUM = 'medium',
    SEMIBOLD = 'semibold',
    BOLD = 'bold',
    EXTRABOLD = 'extrabold',
}

export enum TextColor {
    BROWN = 'brown',
    BROWN_1 = 'brown_1',
    WHITE = 'white',
}

interface TextProps {
    className?: string;
    text?: string;
    theme?: TextTheme;
    size?: TextSize;
    weight?: TextWeight;
    color?: TextColor;
    shadow?: boolean;
}
export const Text: FC<TextProps> = (props) => {
    const {
        className,
        text,
        theme = TextTheme.PRIMARY,
        size = TextSize.SM,
        weight = TextWeight.REGULAR,
        shadow,
        color = TextColor.BROWN,
    } = props;

    return (
        <div className={cn(className, styles[theme])}>
            {text && (
                <p
                    className={cn(styles.text, styles[size], styles[weight], styles[color], {
                        [styles.shadow]: shadow,
                    })}
                >
                    {text}
                </p>
            )}
        </div>
    );
};
