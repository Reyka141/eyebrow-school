import { CourseDetailsSection, ServicesListSection } from '@/entities/Course';
import { GreetingSection } from '@/pages/MainPage/ui/GreetingSection/GreetingSection';
import { Header } from '@/pages/MainPage/ui/Header/Header';
import { TrainingDescriptionSection } from '@/pages/MainPage/ui/TrainingDescriptionSection/TrainingDescriptionSection';
import { MoreInfo } from '@/shared/ui/MoreInfo/MoreInfo';
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
            <MoreInfo />
            <CourseDetailsSection />
            {/* Секция с отзывами */}
            {/* Секция с сертификатом тот же футер */}
        </div>
    );
};

export default MainPage;
