import cn from 'classnames';
import { FC, ReactNode } from 'react';
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
        shadow = false,
        color = TextColor.BROWN,
    } = props;

    const mods: Record<string, boolean> = {
        [styles.text]: true,
        [styles[theme]]: true,
        [styles[size]]: true,
        [styles[weight]]: true,
        [styles[color]]: true,
        [styles.shadow]: shadow,
    };

    const parseText = (text: string): ReactNode[] => {
        if (!text.includes('<b>')) return [text];

        const parts: ReactNode[] = [];
        let currentText = text;

        while (currentText.length > 0) {
            const startIndex = currentText.indexOf('<b>');

            if (startIndex === -1) {
                parts.push(currentText);
                break;
            }

            if (startIndex > 0) {
                parts.push(currentText.substring(0, startIndex));
            }

            const endIndex = currentText.indexOf('</b>', startIndex);

            if (endIndex === -1) {
                parts.push(currentText);
                break;
            }

            const boldText = currentText.substring(startIndex + 3, endIndex);
            parts.push(
                <b key={`bold-${startIndex}`} className={cn(mods, styles.regular)}>
                    {boldText}
                </b>,
            );

            currentText = currentText.substring(endIndex + 4);
        }

        return parts;
    };

    return <div className={cn(className, styles[theme])}>{text && <p className={cn(mods)}>{parseText(text)}</p>}</div>;
};
