import { Text, TextSize, TextWeight } from '@/shared/ui/Text/Text';
import cn from 'classnames';
import { FC, useCallback } from 'react';
import styles from './List.module.scss';

export enum ListType {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    THIRD = 'third',
    FOURTH = 'fourth',
}

export interface ListItem {
    id: number;
    text: string;
}

interface ListProps {
    className?: string;
    items: ListItem[];
    type?: ListType;
}
export const List: FC<ListProps> = (props) => {
    const { className, items, type = ListType.PRIMARY } = props;

    const getWeight = useCallback((type: ListType) => {
        switch (type) {
            case ListType.THIRD:
                return TextWeight.REGULAR;
            case ListType.FOURTH:
                return TextWeight.REGULAR;
            default:
                return TextWeight.MEDIUM;
        }
    }, []);
    return (
        <ul className={cn(styles.List, className, styles[type])}>
            {items.map((item) => (
                <li key={item.id}>
                    <Text
                        className={styles.list_item_text}
                        text={item.text}
                        size={TextSize.XXS}
                        weight={getWeight(type)}
                    />
                </li>
            ))}
        </ul>
    );
};
