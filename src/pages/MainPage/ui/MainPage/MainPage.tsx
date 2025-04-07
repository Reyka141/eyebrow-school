import { ServicesListSection } from '@/entities/Course';
import { GreetingSection } from '@/pages/MainPage/ui/GreetingSection/GreetingSection';
import { Header } from '@/pages/MainPage/ui/Header/Header';
import { TrainingDescriptionSection } from '@/pages/MainPage/ui/TrainingDescriptionSection/TrainingDescriptionSection';
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
            <Header />
            <GreetingSection />
            <TrainingDescriptionSection />
            <ServicesListSection />
            {/* Секция со стрелкой вниз */}
            {/* Секция с информацией с курсами */}
            {/* Секция с отзывами */}
            {/* Секция с сертификатом тот же футер */}
        </div>
    );
};

export default MainPage;
