import { Button } from '@/shared/ui/Button/Button';
import { ButtonTheme } from '@/shared/ui/Button/types';
import cn from 'classnames';
import { FC } from 'react';
import styles from './MainPage.module.scss';

interface MainPageProps {
    className?: string;
}
const MainPage: FC<MainPageProps> = (props) => {
    const { className } = props;
    return (
        <div className={cn(styles.MainPage, className)}>
            {/* Header */}
            {/* Секция приветствие */}
            {/* Секция с картинками покупки курсов */}
            {/* Секция со стрелкой вниз */}
            {/* Секция с информацией с курсами */}
            {/* Секция с отзывами */}
            {/* Секция с сертификатом тот же футер */}
            <Button theme={ButtonTheme.SECONDARY}>Click me</Button>
            <Button theme={ButtonTheme.PRIMARY}>Click me</Button>
        </div>
    );
};

export default MainPage;
