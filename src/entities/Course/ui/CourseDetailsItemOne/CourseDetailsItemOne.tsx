import MainImg from '@/shared/assets/images/course_detail_1.png';
import { Brands } from '@/shared/ui/Brands/Brands';
import { Button } from '@/shared/ui/Button/Button';
import { ButtonTheme } from '@/shared/ui/Button/types';
import { HeaderText, HeaderTextTheme } from '@/shared/ui/HeaderText/HeaderText';
import { IconWithNumber } from '@/shared/ui/IconWithNumber/IconWithNumber';
import { Text, TextSize, TextWeight } from '@/shared/ui/Text/Text';
import cn from 'classnames';
import { FC } from 'react';
import styles from './CourseDetailsItemOne.module.scss';
import { List, ListType } from '@/shared/ui/List/List';
interface CourseDetailsItemOneProps {
    className?: string;
}

const tableItems = [
    {
        id: 1,
        text: 'Фарбування після ламінування брів без затемненого волосся;',
    },
    {
        id: 2,
        text: 'Міфи про роботу фарбників та мікси;',
    },
    {
        id: 3,
        text: 'Чому перетемнюється волосся, від чого це залежить;',
    },
    {
        id: 4,
        text: 'Класифікація фарбників;',
    },
    {
        id: 5,
        text: 'Колористика; Підбір кольору;',
    },
    {
        id: 6,
        text: 'Регламент перед процедурою;',
    },
    {
        id: 7,
        text: 'Правильна техніка викладки фарбника;',
    },
    {
        id: 8,
        text: 'Пористість волосся. Види пористості та її вплив на процеси процедури;',
    },
    {
        id: 9,
        text: 'Як працювати з дуже пористим волоссям;',
    },
    {
        id: 10,
        text: 'Оклюзія. Утворення оклюзійної плівки на волоссі та навіщо це;',
    },
    {
        id: 11,
        text: 'Прорідження; Різноманітні вихідники брів та робота з ними;',
    },
    {
        id: 12,
        text: 'Види складників для ламі; Які працюють швидше/ повільніше та чому;',
    },
    {
        id: 13,
        text: 'Витримка складників без перепаленого волосся в результаті;',
    },
    {
        id: 14,
        text: 'Поетапність процедури ламі;',
    },
    {
        id: 15,
        text: 'Розбір різноманітних складників;',
    },
    {
        id: 16,
        text: 'Догляд за волоссям;',
    },
    {
        id: 17,
        text: 'Брови, на які не можна робити процедуру;',
    },
    {
        id: 18,
        text: 'Визначення показників зродового та правильного ламінування брів;',
    },
    {
        id: 19,
        text: 'Противопоказання та показання до процедури;',
    },
    {
        id: 20,
        text: 'Розбір будови волосу;',
    },
    {
        id: 21,
        text: 'Типи волосся;',
    },
    {
        id: 22,
        text: 'Аналіз волосу перед процедурою ламі;',
    },
    {
        id: 23,
        text: 'Кератин. Типи кератину та їх використання;',
    },
];

const tableItemsTwo = [
    {
        id: 1,
        text: 'Англо-український сертифікат по закінченню навчання;',
    },
    {
        id: 2,
        text: 'Консультації по вашим роботам у дірект;',
    },
    {
        id: 3,
        text: 'Доступ до навчання залишається з вами на завжди;',
    },
    {
        id: 4,
        text: 'Навчання проходить у закритому телеграм каналі, вся інформація вже є в повному обсязі, проходите навчання коли вам зручно буде;',
    },
];

export const CourseDetailsItemOne: FC<CourseDetailsItemOneProps> = (props) => {
    const { className } = props;
    const onButtonClick = () => {
        window.open('https://secure.wayforpay.com/button/bc8f827b1e875', '_blank');
    };
    return (
        <div className={cn(styles.CourseDetailsItemOne, className)}>
            <div className={styles.header}>
                <IconWithNumber number={1} />
                <Text size={TextSize.SM_LG} weight={TextWeight.EXTRABOLD} text="“LAMI BROWS PRO”" />
                <img src={MainImg} width={194} alt="LAMI BROWS PRO" />
            </div>
            <div className={styles.practice_section_container}>
                <Text size={TextSize.XS_LG} weight={TextWeight.REGULAR} text="Практична частина" />
                <div className={styles.practice_section}>
                    <span>9</span>
                    <div>
                        <Text size={TextSize.XXS} weight={TextWeight.MEDIUM} text="відео-демонстрацій на моделях " />
                        <Text size={TextSize.XXS} weight={TextWeight.MEDIUM} text="різних моделей (9 типажів дівчат)" />
                        <Text
                            size={TextSize.XXS}
                            weight={TextWeight.MEDIUM}
                            text="Техніки фарбування: яскрава графіка; натуральна графіка; волоскова техніка"
                        />
                    </div>
                </div>
            </div>
            <div className={styles.theory_section_container}>
                <HeaderText theme={HeaderTextTheme.SECONDARY} title="“LAMI BROWS PRO”" subtitle="Теоретична частина" />
                <List items={tableItems} type={ListType.PRIMARY} />
            </div>
            <div>
                <HeaderText
                    theme={HeaderTextTheme.SECONDARY}
                    title="“LAMI BROWS PRO”"
                    subtitle="Організаційні питання"
                />
                <List items={tableItemsTwo} type={ListType.SECONDARY} />
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
