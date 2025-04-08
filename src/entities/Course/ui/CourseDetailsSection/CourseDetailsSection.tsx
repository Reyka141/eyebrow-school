import { HeaderText } from '@/shared/ui/HeaderText/HeaderText';
import cn from 'classnames';
import { FC } from 'react';
import { CourseDetailsItemOne } from '../CourseDetailsItemOne/CourseDetailsItemOne';
import { CourseDetailsItemThree } from '../CourseDetailsItemThree/CourseDetailsItemThree';
import { CourseDetailsItemTwo } from '../CourseDetailsItemTwo/CourseDetailsItemTwo';
import styles from './CourseDetailsSection.module.scss';
interface CourseDetailsSectionProps {
    className?: string;
}

export const CourseDetailsSection: FC<CourseDetailsSectionProps> = (props) => {
    const { className } = props;
    return (
        <div className={cn(styles.CourseDetailsSection, className)}>
            <HeaderText title="Розгорнута інформація про кожен курс" />
            <CourseDetailsItemOne />
            <CourseDetailsItemTwo />
            <CourseDetailsItemThree />
        </div>
    );
};
