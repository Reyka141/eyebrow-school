import MainImg from '@/shared/assets/images/course_detail_3.png';
import { Brands } from '@/shared/ui/Brands/Brands';
import { Button } from '@/shared/ui/Button/Button';
import { ButtonTheme } from '@/shared/ui/Button/types';
import { IconWithNumber } from '@/shared/ui/IconWithNumber/IconWithNumber';
import { List, ListType } from '@/shared/ui/List/List';
import { Text, TextSize, TextWeight } from '@/shared/ui/Text/Text';
import cn from 'classnames';
import { FC } from 'react';
import styles from './CourseDetailsItemThree.module.scss';

interface CourseDetailsItemThreeProps {
    className?: string;
}

const tableBlockOne = [
    {
        id: 1,
        text: 'Фарбування без затемненого волосся',
    },
    {
        id: 2,
        text: 'Архітектура брів та ідеальна розмітка (паста та олівець)',
    },
    {
        id: 3,
        text: 'Колористика (9 найпопулярніших фарбників на бьюті ринку)',
    },
    {
        id: 4,
        text: '3 техніки викладки фарби для досягнення швидких та найкращих результатів',
    },
    {
        id: 5,
        text: 'рівень рн - де і навіщо він',
    },
    {
        id: 6,
        text: 'Типи шкіри. Підготовка шкіри до фарбування',
    },
    {
        id: 7,
        text: 'Корекція. Віск. Пінцет',
    },
    {
        id: 8,
        text: 'Архітектура брів. Розмітка пастою та олівцем',
    },
    {
        id: 9,
        text: 'Колористика по системі СМУК',
    },
    {
        id: 10,
        text: 'Параметри кольору',
    },
    {
        id: 11,
        text: 'РГТ фарбників. РГТ волосся на голові. Як визначити',
    },
    {
        id: 12,
        text: 'Як визначити чистий та брудний кн',
    },
    {
        id: 13,
        text: 'Карта клієнта. Кольоротипи клієнта',
    },
    {
        id: 14,
        text: 'Як покроково підібрати колір',
    },
    {
        id: 15,
        text: 'Викладка фарбника. Правила викладки щоб не затемнити волосся',
    },
    {
        id: 16,
        text: 'Кислотна змивка. Як користуватись та навіщо',
    },
];

export const CourseDetailsItemThree: FC<CourseDetailsItemThreeProps> = (props) => {
    const { className } = props;
    const onButtonClick = () => {
        window.open('https://secure.wayforpay.com/button/b602964f31bbf', '_blank');
    };
    return (
        <div className={cn(styles.CourseDetailsItemThree, className)}>
            <div className={styles.header}>
                <IconWithNumber number={3} />
                <Text size={TextSize.SM_LG} weight={TextWeight.EXTRABOLD} text="“BROWS LEVEL UP”" />
                <img src={MainImg} width={194} alt="“BROWS LEVEL UP”" />
            </div>
            <div className={styles.practice_section_container}>
                <Text size={TextSize.XS_LG} weight={TextWeight.REGULAR} text="Практична частина" />
                <div>
                    <Text
                        size={TextSize.XXS}
                        weight={TextWeight.BOLD}
                        text="5 Відео-демонстрацій на різних моделях"
                    />
                </div>
            </div>
            <div className={styles.theory_section_container}>
                <div className={styles.theory_section_container_item}>
                    <Text size={TextSize.XS_LG} weight={TextWeight.REGULAR} text="Теоретична частина:" />
                    <List items={tableBlockOne} type={ListType.THIRD} />
                </div>
            </div>

            <Brands />
            <div className={styles.button_container}>
                <Button theme={ButtonTheme.SECONDARY} onClick={onButtonClick}>
                    Придбати курс
                </Button>
            </div>
        </div>
    );
};
