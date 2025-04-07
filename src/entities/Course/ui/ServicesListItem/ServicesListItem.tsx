import { Button } from '@/shared/ui/Button/Button';
import { ButtonTheme } from '@/shared/ui/Button/types';
import { Text, TextColor, TextSize, TextWeight } from '@/shared/ui/Text/Text';
import cn from 'classnames';
import { FC } from 'react';
import styles from './ServicesListItem.module.scss';
export interface ServicesListItem {
    id: number;
    title: string;
    description: string;
    list?: string[];
    footer?: string;
    image: string;
    price: string;
    buttonText: string;
    buttonLink: string;
}

interface ServicesListItemProps {
    className?: string;
    item: ServicesListItem;
}
export const ServicesListItem: FC<ServicesListItemProps> = (props) => {
    const { className, item } = props;
    const { id, title, description, list, footer, image, price, buttonText, buttonLink } = item;

    const handleButtonClick = () => {
        window.open(buttonLink, '_blank');
    };

    return (
        <div
            className={cn(styles.ServicesListItem, className)}
            style={{
                backgroundImage: `url(${image})`,
                width: '100%',
                height: '167px',
                backgroundSize: 'cover',
                backgroundPosition: 'center bottom',
            }}
        >
            <div className={styles.content}>
                <Text
                    className={styles.title}
                    weight={TextWeight.BOLD}
                    size={TextSize.XS_LG}
                    color={TextColor.WHITE}
                    text={title}
                />
                <Text
                    className={cn({ [styles.firstDescription]: id === 1 })}
                    weight={TextWeight.LIGHT}
                    size={TextSize.XXS}
                    color={TextColor.WHITE}
                    text={description}
                />
                {list && (
                    <ul className={styles.list}>
                        {list.map((item) => (
                            <li key={item} className={styles.listItem}>
                                <Text
                                    size={TextSize.XXS}
                                    weight={TextWeight.LIGHT}
                                    color={TextColor.WHITE}
                                    text={item}
                                />
                            </li>
                        ))}
                    </ul>
                )}
                {footer && (
                    <Text
                        className={styles.footer}
                        weight={TextWeight.SEMIBOLD}
                        size={TextSize.XXS}
                        color={TextColor.WHITE}
                        text={footer}
                    />
                )}
            </div>
            <div className={styles.price}>
                <div className={styles.priceTextWrapper}>
                    <Text size={TextSize.XS_LG} weight={TextWeight.SEMIBOLD} color={TextColor.WHITE} text={price} />
                </div>
                <Button theme={ButtonTheme.PRIMARY} className={styles.button} onClick={handleButtonClick}>
                    {buttonText}
                </Button>
            </div>
            <span className={styles.number}>{id}</span>
        </div>
    );
};
