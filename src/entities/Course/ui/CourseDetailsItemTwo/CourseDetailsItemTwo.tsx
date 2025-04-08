import MainImg from '@/shared/assets/images/course_detail_2.png';
import { Brands } from '@/shared/ui/Brands/Brands';
import { Button } from '@/shared/ui/Button/Button';
import { ButtonTheme } from '@/shared/ui/Button/types';
import { HeaderText, HeaderTextTheme } from '@/shared/ui/HeaderText/HeaderText';
import { IconWithNumber } from '@/shared/ui/IconWithNumber/IconWithNumber';
import { List, ListType } from '@/shared/ui/List/List';
import { Text, TextSize, TextWeight } from '@/shared/ui/Text/Text';
import cn from 'classnames';
import { FC } from 'react';
import styles from './CourseDetailsItemTwo.module.scss';

interface CourseDetailsItemTwoProps {
    className?: string;
}

const TablePracticeSection = [
    {
        id: 1,
        text: '5 демо. "Процедура освітлення та фарбування брів"',
    },
    {
        id: 2,
        text: '3 демо. "Ідеальні графічні брови, розмітка пастою та олівцем"',
    },
    {
        id: 3,
        text: 'Натуральні техніки, які довго носяться',
    },
];

const tableBlockOne = [
    {
        id: 1,
        text: 'Фактори проникнення шкіри; Підсилювачі проникності шкіри;',
    },
    {
        id: 2,
        text: 'Барʼєри шкіри; Будова шкіри; Філагрін;',
    },
    {
        id: 3,
        text: 'рН шкіри; Реакція нейтралізації, Вплив рН на волосся; рН в косметиці;',
    },
    {
        id: 4,
        text: 'Лужні та кислотні продукти для волосся; Нейтральний рН у продуктах;',
    },
    {
        id: 5,
        text: 'Ароматичні аміни;',
    },
    {
        id: 6,
        text: 'Типи шкіри; Хвороби шкіри; Алергічні реакції;',
    },
    {
        id: 7,
        text: 'ПАР; Типи ПАР; Компоненти які негативно впливають на шкіру;',
    },
    {
        id: 8,
        text: 'Рекомендовані засоби для роботи зі шкірою; Детальний розбір продуктів;',
    },
    {
        id: 9,
        text: 'Будова волосся; Кудрява та пряма волосина;',
    },
    {
        id: 10,
        text: 'Ліпіди; Хімічні звʼязки у волоссі;',
    },
    {
        id: 11,
        text: 'Метіонін та цистеїн; Гідролізат кератину та косметика з ним;',
    },
    {
        id: 12,
        text: 'Пористість волосся; Робота з нею;',
    },
];

const tableBlockTwo = [
    {
        id: 1,
        text: 'Від чого залежить колір нефарбованого волосся;',
    },
    {
        id: 2,
        text: 'Типи меланінів; Кортикальні фузі; Будова кореня; Фази росту волосся;',
    },
    {
        id: 3,
        text: 'Оклюзія; Міфи та вся правда про оклюзію; Засоби які реально працюють при створені оклюзії;',
    },
    {
        id: 4,
        text: 'РГТ; Як визначити РГТ брів та фарбуючих продуктів;',
    },
    {
        id: 5,
        text: 'Тон і підтон; Температура; Зміна температури волосся;',
    },
    {
        id: 6,
        text: 'Все про воскову корекцію брів; Підготовка шкіри перед корекцією та що робити після;',
    },
    {
        id: 7,
        text: 'Кольоротипи клієнтів; Карта клієнта; Міфи про кольоротипи;',
    },
    {
        id: 8,
        text: 'Працюючі схеми для індивідуального підбору кольору для будь-якого клієнта;',
    },
];

const tableBlockThree = [
    {
        id: 1,
        text: 'Сучасні косметичні засоби для зміни кольору волосся',
    },
    {
        id: 2,
        text: 'Класифікація фарб',
    },
    {
        id: 3,
        text: 'Блондуючі засоби',
    },
    {
        id: 4,
        text: 'Від чого залежить носка фарбника',
    },
    {
        id: 5,
        text: 'Розбір фарбників по складу/ носибельності та ін. властивостям',
    },
    {
        id: 6,
        text: 'Вчимося розуміти склад та властивості будь-якого косметичного засобу',
    },
    {
        id: 7,
        text: 'Формування кольору',
    },
    {
        id: 8,
        text: 'Коректори для роботи з барвниками',
    },
    {
        id: 9,
        text: 'Окисники: Склад; Принцип роботи; Про що говорить % окисника',
    },
    {
        id: 10,
        text: 'Властивості окисників',
    },
    {
        id: 11,
        text: 'Типи окисників та їх вплив на фарбування',
    },
    {
        id: 12,
        text: 'Особливості окиснення волосся',
    },
];

const tableBlockFour = [
    {
        id: 1,
        text: 'Формування кольору по системі СМУ(К); Де ми використовуємо коло Іттена;',
    },
    {
        id: 2,
        text: 'Розбираємо міфи про коло Іттена; Правдива колористика за наглядними прикладами;',
    },
    {
        id: 3,
        text: 'Пігментна маса;',
    },
    {
        id: 4,
        text: 'Чому червоний та синій не є первинними кольорами?',
    },
    {
        id: 5,
        text: 'Що означають молекули у кольорі?',
    },
    {
        id: 6,
        text: 'Що таке базовик? Чому ми можемо додати базовик до будь-якого кольору?',
    },
    {
        id: 7,
        text: 'Що таке нейтральні кольори?',
    },
    {
        id: 8,
        text: 'Змішування кольорів;',
    },
    {
        id: 9,
        text: 'Що ще корисного може дати коло Іттена, крім компліментарності?',
    },
    {
        id: 10,
        text: 'Як порахувати РІТ барвника? Чому може відбуватися зниження РГТ?',
    },
    {
        id: 11,
        text: 'Що важливо врахувати при виборі барвника крім РГТ?',
    },
    {
        id: 12,
        text: 'Як визначити рівень глибини тону барвника?',
    },
    {
        id: 13,
        text: 'Колірний нюанс; Що таке тон та підтон - наглядно; Матриця кольору; Кольорове направлення; Оманливі кольорові нюанси;',
    },
    {
        id: 14,
        text: 'Значення N;',
    },
    {
        id: 15,
        text: 'Яскравість та насиченість; Характеристика пігменту;',
    },
    {
        id: 16,
        text: 'База волосся та робота з ним;',
    },
    {
        id: 17,
        text: 'Що таке русявий колір у колористиці?',
    },
    {
        id: 18,
        text: 'Брудний тон; Як почистити колір від бруду?',
    },
    {
        id: 19,
        text: 'Робота з аміачними коректорами;',
    },
];

const tableBlockFive = [
    {
        id: 1,
        text: 'Процедура освітлення та знебарвлення. Різниця та значення;',
    },
    {
        id: 2,
        text: 'Фон освітлення;',
    },
    {
        id: 3,
        text: 'Що закриває тепло після освітлення;',
    },
    {
        id: 4,
        text: 'Поняття прозорості кольору;',
    },
    {
        id: 5,
        text: 'Знебарвлювальні продукти; Принцип роботи пудри та інших препаратів для освітлення; Види освітлювачів; їх різниця та робота з ними;',
    },
    {
        id: 6,
        text: 'Показання та протипоказання до процедури;',
    },
    {
        id: 7,
        text: 'Розбір хімічного складу освітлюючих продуктів;',
    },
    {
        id: 8,
        text: 'Зміна температури брів;',
    },
    {
        id: 9,
        text: 'Як працювати з фоном освітлення?',
    },
    {
        id: 10,
        text: 'Кислотні змивки;',
    },
];

export const CourseDetailsItemTwo: FC<CourseDetailsItemTwoProps> = (props) => {
    const { className } = props;
    const onButtonClick = () => {
        window.open('https://secure.wayforpay.com/button/b76516fa26f18', '_blank');
    };
    return (
        <div className={cn(styles.CourseDetailsItemOne, className)}>
            <div className={styles.header}>
                <IconWithNumber number={2} />
                <Text size={TextSize.SM_LG} weight={TextWeight.EXTRABOLD} text="“PERFECT BROWS COLOR”" />
                <img src={MainImg} width={194} alt="LAMI BROWS PRO" />
            </div>
            <div className={styles.practice_section_container}>
                <Text size={TextSize.XS_LG} weight={TextWeight.REGULAR} text="Практична частина" />
                <div>
                    <Text size={TextSize.XXS} weight={TextWeight.SEMIBOLD} text="8 відео-демонстрацій:" />
                    <List items={TablePracticeSection} type={ListType.FOURTH} />
                </div>
            </div>
            <div className={styles.theory_section_container}>
                <HeaderText
                    theme={HeaderTextTheme.SECONDARY}
                    title="“PERFECT BROWS COLOR”"
                    subtitle="Програма навчання 5 блоків"
                />
                <div className={styles.theory_section_container_item}>
                    <Text size={TextSize.XXS} weight={TextWeight.BOLD} text="1 Блок: ШКІРА ТА ВОЛОССЯ:" />
                    <List items={tableBlockOne} type={ListType.THIRD} />
                </div>
                <div className={styles.theory_section_container_item}>
                    <Text size={TextSize.XXS} weight={TextWeight.BOLD} text="2 Блок: ФАРБУВАННЯ БРІВ:" />
                    <List items={tableBlockTwo} type={ListType.THIRD} />
                </div>
                <div className={styles.theory_section_container_item}>
                    <Text size={TextSize.XXS} weight={TextWeight.BOLD} text="3 Блок: БРОВНА ХІМІЯ:" />
                    <List items={tableBlockThree} type={ListType.THIRD} />
                </div>
                <div className={styles.theory_section_container_item}>
                    <Text size={TextSize.XXS} weight={TextWeight.BOLD} text="4 Блок: КОЛОРИСТИКА:" />
                    <List items={tableBlockFour} type={ListType.THIRD} />
                </div>
                <div className={styles.theory_section_container_item}>
                    <Text size={TextSize.XXS} weight={TextWeight.BOLD} text="5 Блок: ОСВІТЛЕННЯ БРІВ:" />
                    <List items={tableBlockFive} type={ListType.THIRD} />
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
