import CardOne from '@/shared/assets/images/card_1.png';
import CardTwo from '@/shared/assets/images/card_2.png';
import CardThree from '@/shared/assets/images/card_3.png';
import { HeaderText } from '@/shared/ui/HeaderText/HeaderText';
import cn from 'classnames';
import { FC } from 'react';
import { ServicesListItem } from '../ServicesListItem/ServicesListItem';
import styles from './ServicesListSection.module.scss';

interface ServicesListSectionProps {
    className?: string;
}

const servicesList: ServicesListItem[] = [
    {
        id: 1,
        title: '“LAMI BROWS PRO”',
        description:
            'Ламінування та фарбування брів, <b>9 відео-демонстрацій на моделях у техніках</b>, яскрава графіка, натуральна графіка, волоскова техніка',
        list: undefined,
        footer: '9 різних моделей (9 типажів дівчат)',
        image: CardOne,
        price: '799 грн',
        buttonText: 'Придбати',
        buttonLink: 'https://secure.wayforpay.com/button/bc8f827b1e875',
    },
    {
        id: 2,
        title: '“PERFECT BROWS COLOR”',
        description:
            'Онлайн навчання по колористиці, хімії та освітленню брів в графічній та натуральній  техніці, <b>8 відео-демонстрацій:</b>',
        list: [
            '5 демо. “Процедура освітлення та фарбування брів” ',
            '3 демо. “Ідеальні графічні брови, розмітка пастою та олівцем”',
            'натуральні техніки, які довго носяться',
        ],
        footer: undefined,
        image: CardTwo,
        price: '999 грн',
        buttonText: 'Придбати',
        buttonLink: 'https://secure.wayforpay.com/button/b76516fa26f18',
    },
    {
        id: 3,
        title: '“BROWS LEVEL UP”',
        description: 'Онлайн навчання:',
        list: [
            'фарбування без затемненого волосся',
            'Ідеальна розмітка',
            'Колористика (9 найпопулярніших фарбників на бьюті ринку)',
            'Колористика по системі Смук',
            'Типи шкіри. Підготовка шкіри до фарбування',
        ],
        footer: undefined,
        image: CardThree,
        price: '599 грн',
        buttonText: 'Придбати',
        buttonLink: 'https://secure.wayforpay.com/button/b602964f31bbf',
    },
];

export const ServicesListSection: FC<ServicesListSectionProps> = (props) => {
    const { className } = props;
    return (
        <div className={cn(styles.ServicesListSection, className)}>
            <HeaderText className={styles.title} title="Онлайн навчання | Підвищення кваліфікації" />
            <div className={styles.servicesList}>
                {servicesList.map((item) => (
                    <ServicesListItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};
