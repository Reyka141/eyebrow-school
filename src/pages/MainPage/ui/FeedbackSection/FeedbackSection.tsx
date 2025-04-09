import { HeaderText } from '@/shared/ui/HeaderText/HeaderText';
import cn from 'classnames';
import { FC } from 'react';
import styles from './FeedbackSection.module.scss';
import reviews_1 from '@/shared/assets/images/reviews_1.jpg';
import reviews_2 from '@/shared/assets/images/reviews_2.jpg';
import reviews_3 from '@/shared/assets/images/reviews_3.jpg';
import reviews_4 from '@/shared/assets/images/reviews_4.jpg';
import reviews_5 from '@/shared/assets/images/reviews_5.jpg';
import reviews_6 from '@/shared/assets/images/reviews_6.jpg';
import reviews_7 from '@/shared/assets/images/reviews_7.jpg';
interface FeedbackSectionProps {
    className?: string;
}
export const FeedbackSection: FC<FeedbackSectionProps> = (props) => {
    const { className } = props;
    return (
        <div className={cn(styles.FeedbackSection, className)}>
            <HeaderText title="Відгуки учнів" />
            <div className={styles.feedback_container}>
                <img src={reviews_1} className={cn(styles.feedback_image, styles.feedback_image_1)} alt="feedback" />
                <img src={reviews_2} className={cn(styles.feedback_image, styles.feedback_image_2)} alt="feedback" />
                <img src={reviews_3} className={cn(styles.feedback_image, styles.feedback_image_3)} alt="feedback" />
                <img src={reviews_4} className={cn(styles.feedback_image, styles.feedback_image_4)} alt="feedback" />
                <img src={reviews_5} className={cn(styles.feedback_image, styles.feedback_image_5)} alt="feedback" />
                <img src={reviews_6} className={cn(styles.feedback_image, styles.feedback_image_6)} alt="feedback" />
                <img src={reviews_7} className={cn(styles.feedback_image, styles.feedback_image_7)} alt="feedback" />
            </div>
        </div>
    );
};
