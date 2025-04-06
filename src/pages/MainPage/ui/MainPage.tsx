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
            <h1>MainPage</h1>
        </div>
    );
};

export default MainPage;
